import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="Bill Destroyers home">
          <Logo />
          <span className="brand-name">Bill Destroyers</span>
        </Link>
        <nav className="header-nav" aria-label="Main">
          <Link className="nav-link" href="/#how-it-works">
            How it works
          </Link>
          <Link className="btn btn-orange" href="/#estimate">
            Get an estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
