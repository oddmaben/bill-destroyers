import { NextResponse } from "next/server";

const ALLOWED_STATES: Record<string, string> = {
  CA: "California",
};

type Body = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  state?: unknown;
  billAmount?: unknown;
  provider?: unknown;
  description?: unknown;
  website?: unknown;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Body;

  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  if (asString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const stateCode = asString(body.state).toUpperCase();
  const provider = asString(body.provider);
  const description = asString(body.description);
  const amountRaw = asString(body.billAmount);
  const amount = Number(amountRaw.replace(/[$,]/g, ""));
  const digits = phone.replace(/\D/g, "");

  if (!name || !email || !phone || !stateCode || !provider || !description || !amountRaw) {
    return NextResponse.json(
      { error: "Please fill in every field so we can review your bill." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (digits.length < 10) {
    return NextResponse.json(
      { error: "Please enter a phone number with at least 10 digits." },
      { status: 400 },
    );
  }

  const state = ALLOWED_STATES[stateCode];
  if (!state) {
    return NextResponse.json(
      { error: "We currently only accept bills from California." },
      { status: 400 },
    );
  }

  if (!Number.isFinite(amount) || amount < 1) {
    return NextResponse.json(
      { error: "Please enter a medical bill amount of at least $1." },
      { status: 400 },
    );
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Submissions";

  if (!apiKey || !baseId) {
    console.error("Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID.");
    return NextResponse.json(
      {
        error:
          "The estimate form is not connected yet. Add your Airtable keys and try again.",
      },
      { status: 500 },
    );
  }

  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  try {
    const response = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Email: email,
          Phone: phone,
          State: state,
          "Bill Amount": amount,
          Provider: provider,
          Description: description,
        },
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Airtable error:", response.status, details);
      return NextResponse.json(
        {
          error:
            "We could not save your bill right now. Please try again in a few minutes.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Airtable request failed:", error);
    return NextResponse.json(
      {
        error:
          "We could not reach our records just now. Please try again in a few minutes.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
