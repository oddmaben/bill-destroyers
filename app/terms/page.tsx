import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main id="main" className="legal-main">
      <div className="wrap">
        <Link className="back-link" href="/">
          ← Back to Bill Destroyers
        </Link>
        <p className="legal-banner">
          Placeholder text only. Replace this page with terms reviewed by your
          attorney before launch.
        </p>
        <h1>Terms of Service</h1>
        <p>Last updated: September 27, 2026</p>
        <p>
          These placeholder terms describe how Bill Destroyers would typically
          offer a medical bill estimate and negotiation service. They are not
          legal advice and are not a contract until you replace them.
        </p>
        <h2>The service</h2>
        <p>
          Submitting the form does not guarantee savings. It asks us to review
          your bill and call you. Any negotiation happens only if you choose to
          continue after that call.
        </p>
        <h2>No medical or legal advice</h2>
        <p>
          Bill Destroyers is not a law firm, insurance company, or medical
          provider. Nothing on this site is medical, insurance, or legal
          advice.
        </p>
        <h2>Your responsibilities</h2>
        <p>
          You agree to provide accurate information about your bill and to keep
          copies of documents we may later request. You remain responsible for
          amounts you still owe until a provider agrees to a different number
          in writing.
        </p>
        <h2>Limitation of liability</h2>
        <p>
          This placeholder does not set liability limits. Your attorney should
          draft this section before you accept real customers.
        </p>
      </div>
    </main>
  );
}
