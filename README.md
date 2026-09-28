# Bill Destroyers

Landing page for a medical bill estimator. Visitors submit bill details, then a specialist follows up within 24 hours. Submissions are saved to Airtable.

## Run locally

```bash
npm install
cp .env.example .env.local
```

Add your Airtable values to `.env.local` (see below), then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Set up Airtable

The form posts to `/api/submit`. That route writes one record to Airtable. The API token stays on the server, never in the browser.

### 1. Create a base and table

1. Sign in at [airtable.com](https://airtable.com).
2. Click **Create** → **Grid base** (or start from scratch).
3. Name the base **Bill Destroyers**.
4. Rename the default table to **Submissions** (must match `AIRTABLE_TABLE_NAME`).
5. Delete the sample fields, then add these fields **with these exact names**:

| Field name   | Field type                         | Notes                                      |
| ------------ | ---------------------------------- | ------------------------------------------ |
| Name         | Single line text                   | Required                                   |
| Email        | Email                              | Required                                   |
| Phone        | Phone number                       | Or single line text                        |
| State        | Single select                      | Add option **California**                  |
| Bill Amount  | Currency                           | US Dollar, 2 decimal places                |
| Provider     | Single line text                   | Hospital or provider name                  |
| Description  | Long text                          | What the bill is for                       |

Airtable already stores a created time on every record, so you do not need a separate date field.

To add more states later, add options to **State** in Airtable, then add the same codes to `ALLOWED_STATES` in `app/api/submit/route.ts` and to the `STATES` list in `components/EstimateForm.tsx`.

### 2. Get the base ID

Open the base. The URL looks like:

`https://airtable.com/appXXXXXXXXXXXXXX/...`

The `app...` segment is `AIRTABLE_BASE_ID`. You can also find it under **Help** → **API documentation** while the base is open.

### 3. Create a personal access token

Airtable no longer uses the old “API key.” Use a personal access token:

1. Open [https://airtable.com/create/tokens](https://airtable.com/create/tokens).
2. Click **Create new token**.
3. Name it **Bill Destroyers site**.
4. Add these scopes:
   - `data.records:write`
   - `data.records:read` (optional, useful if you later list records)
   - `schema.bases:read`
5. Under **Access**, grant the token access to the **Bill Destroyers** base.
6. Create the token and copy it once. It starts with `pat`.
7. Put it in `.env.local` as `AIRTABLE_API_KEY`.

### 4. Local env file

`.env.local` should look like:

```bash
AIRTABLE_API_KEY=patAAAAAAAAAAAAAAAA
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=Submissions
```

Restart `npm run dev` after changing env vars. Submit the form and confirm a new row appears in Airtable.

If a submit fails, check the terminal: Airtable error bodies are logged there. The usual causes are a mismatched table name, a missing field name, or a State option that is not exactly `California`.

## Deploy (Vercel)

1. Push the project to GitHub.
2. Import it in [Vercel](https://vercel.com).
3. Add the same three environment variables in **Settings → Environment Variables**.
4. Deploy.

Do not put the Airtable token in any client-side file.

## Stack

- Next.js App Router
- Native CSS (no extra UI library)
- Airtable Web API via a server route
