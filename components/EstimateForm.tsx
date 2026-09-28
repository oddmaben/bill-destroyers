"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const STATES = [{ value: "CA", label: "California" }];

export default function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      state: String(data.get("state") ?? "").trim(),
      billAmount: String(data.get("billAmount") ?? "").trim(),
      provider: String(data.get("provider") ?? "").trim(),
      description: String(data.get("description") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your bill just now.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again in a few minutes.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="success" role="status" aria-live="polite">
        <svg
          className="success-icon"
          viewBox="0 0 72 72"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="36" cy="36" r="36" fill="#E8F6EE" />
          <path
            d="M22 37.5 31 46l19-22"
            stroke="#1B6B45"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2>You are all set</h2>
        <p>
          Thanks! A bill negotiation specialist will call you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h2 id="form-heading">Tell us about your bill</h2>
      <p className="form-intro">
        Large, clear fields. Takes about two minutes. A specialist reviews every
        submission in person.
      </p>

      {status === "error" && error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="name">
          Full name <span className="req">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
        />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="req">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(555) 555-1234"
            required
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="state">
            State <span className="req">*</span>
          </label>
          <select id="state" name="state" required defaultValue="CA">
            {STATES.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          <span className="hint">We currently serve California.</span>
        </div>
        <div className="field">
          <label htmlFor="billAmount">
            Medical bill amount <span className="req">*</span>
          </label>
          <div className="amount-wrap">
            <span className="dollar" aria-hidden="true">
              $
            </span>
            <input
              id="billAmount"
              name="billAmount"
              type="number"
              inputMode="decimal"
              min="1"
              step="0.01"
              required
              aria-describedby="amount-hint"
            />
          </div>
          <span id="amount-hint" className="hint">
            Enter the total on the bill, even if you have already paid some.
          </span>
        </div>
      </div>

      <div className="field">
        <label htmlFor="provider">
          Hospital or provider name <span className="req">*</span>
        </label>
        <input
          id="provider"
          name="provider"
          type="text"
          required
          maxLength={160}
          placeholder="For example: Mercy General or Dr. Rivera"
        />
      </div>

      <div className="field">
        <label htmlFor="description">
          Brief description of what the bill is for <span className="req">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          maxLength={1000}
          placeholder="For example: emergency room visit in March, or knee surgery"
        />
      </div>

      <button className="btn btn-orange btn-wide" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending your bill…" : "Submit my bill"}
      </button>
      <p className="form-note">
        Free to submit. No obligation. We will not sell your information.
      </p>
    </form>
  );
}
