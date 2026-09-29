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
        <h1>Privacy Policy</h1>
        <p>Last updated: September 29, 2026</p>
        <p>
          Bill Destroyers (“Bill Destroyers,” “we,” “us,” or “our”) operates the
          website billdestroyers.com (the “Site”) and related medical bill
          estimate and negotiation services (collectively, the “Services”). This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit the Site or use the Services.
        </p>
        <p>
          By using the Site or Services, you agree to the collection and use of
          information in accordance with this Privacy Policy. If you do not
          agree, please do not use the Site or Services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following categories of information:</p>
        <h2>Information You Provide</h2>
        <ul>
          <li>
            Contact details such as name, email address, and phone number
          </li>
          <li>State of residence</li>
          <li>
            Medical bill details, including bill amount, hospital or provider
            name, and a description of the services billed
          </li>
          <li>
            Documents or additional information you later share with us to
            support a review or negotiation
          </li>
          <li>
            Communications you send us, including emails, texts, or call notes
          </li>
        </ul>
        <h2>Information Collected Automatically</h2>
        <ul>
          <li>
            Device and browser information, IP address, and general location
            derived from IP
          </li>
          <li>
            Usage data such as pages viewed, referring URL, and timestamps
          </li>
          <li>
            Cookies and similar technologies used for site functionality,
            analytics, and security
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Provide, operate, and improve the Site and Services</li>
          <li>
            Review medical bills, estimate potential savings, and contact you
            about your submission
          </li>
          <li>
            Negotiate with hospitals, providers, billing companies, or related
            parties when you authorize us to do so
          </li>
          <li>Respond to inquiries and provide customer support</li>
          <li>
            Send service-related notices, including appointment reminders and
            status updates
          </li>
          <li>
            Detect, prevent, and address fraud, abuse, or security issues
          </li>
          <li>Comply with legal obligations and enforce our Terms of Service</li>
          <li>
            Analyze Site performance and improve our marketing and operations
          </li>
        </ul>

        <h2>3. How We Share Information</h2>
        <p>
          We do not sell your personal information. We may share information in
          the following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers.</strong> Vendors who help us operate the
            Site and Services, such as hosting providers, form and database
            tools, analytics providers, and communication platforms. These
            parties may process data only as needed to perform services for us.
          </li>
          <li>
            <strong>Providers and billing parties.</strong> When you ask us to
            negotiate on your behalf, we may share relevant bill and contact
            information with the hospital, provider, insurer, or billing company
            involved.
          </li>
          <li>
            <strong>Legal and safety.</strong> When required by law, subpoena,
            or court order, or when we believe disclosure is necessary to
            protect rights, safety, or property.
          </li>
          <li>
            <strong>Business transfers.</strong> In connection with a merger,
            acquisition, financing, or sale of assets, your information may be
            transferred as part of that transaction.
          </li>
          <li>
            <strong>With your consent.</strong> In any other case where you
            direct or agree to the disclosure.
          </li>
        </ul>

        <h2>4. Health-Related Information</h2>
        <p>
          Bill Destroyers is not a healthcare provider, health plan, or
          healthcare clearinghouse, and we are generally not a “covered entity”
          under the Health Insurance Portability and Accountability Act (HIPAA).
          Information you provide about medical bills may include health-related
          details. We handle that information carefully and use it only to
          deliver the Services you request. Do not submit more sensitive medical
          detail than needed for bill review and negotiation.
        </p>

        <h2>5. Cookies and Tracking</h2>
        <p>
          We and our service providers may use cookies, pixels, and similar
          technologies to operate the Site, remember preferences, measure
          traffic, and improve performance. You can control cookies through your
          browser settings. Disabling cookies may affect some Site features.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain personal information for as long as needed to provide the
          Services, fulfill the purposes described in this policy, resolve
          disputes, enforce agreements, and comply with legal requirements.
          Retention periods may vary depending on the nature of the information
          and our business needs.
        </p>

        <h2>7. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          measures designed to protect personal information. No method of
          transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>8. Your Choices and Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          update, or delete certain personal information, or to opt out of
          certain processing. California residents may have additional rights
          under the California Consumer Privacy Act (CCPA/CPRA), including the
          right to know, delete, and correct personal information, and to
          non-discrimination for exercising those rights.
        </p>
        <p>
          To exercise privacy rights, contact us using the details below. We may
          need to verify your identity before completing a request. You may also
          unsubscribe from marketing emails using the link in those messages.
          Service-related messages may still be sent when needed to fulfill your
          request.
        </p>

        <h2>9. Children’s Privacy</h2>
        <p>
          The Services are not directed to children under 13, and we do not
          knowingly collect personal information from children under 13. If we
          learn that we have collected such information, we will take steps to
          delete it.
        </p>

        <h2>10. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites or services. We are
          not responsible for the privacy practices of those third parties. We
          encourage you to review their privacy policies.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The “Last
          updated” date at the top will reflect the latest revision. Continued
          use of the Site or Services after changes become effective constitutes
          acceptance of the updated policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy
          practices, contact Bill Destroyers at{" "}
          <a href="mailto:privacy@billdestroyers.com">
            privacy@billdestroyers.com
          </a>{" "}
          or through the contact information published on billdestroyers.com.
        </p>
      </div>
    </main>
  );
}
