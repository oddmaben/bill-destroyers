import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-brand">Bill Destroyers</p>
        <nav className="footer-links" aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
        <p>
          © {new Date().getFullYear()} Bill Destroyers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
