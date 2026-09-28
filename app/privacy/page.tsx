import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal-main">
      <div className="wrap">
        <Link className="back-link" href="/">
          ← Back to Bill Destroyers
        </Link>
        <p className="legal-banner">
          Placeholder text only. Replace this page with a policy reviewed by
          your attorney before launch.
        </p>
        <h1>Privacy Policy</h1>
        <p>Last updated: September 27, 2026</p>
        <p>
          Bill Destroyers (“we,” “us”) respects your privacy. This placeholder
          explains, in plain language, how a live site would typically handle
          information you submit through the estimate form.
        </p>
        <h2>Information we collect</h2>
        <p>
          When you request an estimate, we collect your name, email address,
          phone number, state, medical bill amount, hospital or provider name,
          and a brief description of the bill. We store that information in
          Airtable so a specialist can follow up.
        </p>
        <h2>How we use it</h2>
        <p>
          We use your information to review your bill, contact you, and
          negotiate with a hospital or provider if you ask us to. We do not
          sell your personal information.
        </p>
        <h2>Sharing</h2>
        <p>
          We may share details with the provider named on your bill, with
          service vendors who help us operate the site (such as Airtable and
          our hosting provider), or when the law requires it.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this placeholder policy can be sent to the email
          address you publish when the site goes live.
        </p>
      </div>
    </main>
  );
}
