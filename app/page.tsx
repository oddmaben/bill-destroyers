import EstimateForm from "@/components/EstimateForm";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Medical bill estimator</p>
            <h1 id="hero-heading">
              See How Much We Can <span className="accent">Destroy</span> Your
              Medical Bill
            </h1>
            <p className="lede">
              Send us the details of your hospital or doctor bill. We look for
              errors, overcharges, and room to negotiate, then a specialist
              works with the provider so you may owe less.
            </p>
            <ul className="trust-list">
              <li>
                <CheckIcon />
                Free to submit. No obligation to continue.
              </li>
              <li>
                <CheckIcon />
                A real specialist calls you within 24 hours.
              </li>
              <li>
                <CheckIcon />
                Currently helping patients in California.
              </li>
            </ul>
          </div>

          <div className="form-card" id="estimate">
            <EstimateForm />
          </div>
        </div>
      </section>

      <section className="how" id="how-it-works" aria-labelledby="how-heading">
        <div className="wrap">
          <p className="section-kicker">Simple process</p>
          <h2 id="how-heading">How it works</h2>
          <p className="section-copy">
            Three clear steps. You send the bill. We do the heavy lifting.
          </p>
          <ol className="steps">
            <li className="step">
              <div className="step-num" aria-hidden="true">
                01
              </div>
              <h3>Submit your bill</h3>
              <p>
                Fill out the form with your contact information, the amount, and
                a short note about what the bill is for. You do not need to
                upload paperwork yet.
              </p>
            </li>
            <li className="step">
              <div className="step-num" aria-hidden="true">
                02
              </div>
              <h3>We review it</h3>
              <p>
                A bill negotiation specialist checks the charges, looks for
                common billing mistakes, and estimates where we may be able to
                lower what you owe.
              </p>
            </li>
            <li className="step">
              <div className="step-num" aria-hidden="true">
                03
              </div>
              <h3>We negotiate for you</h3>
              <p>
                If you want to move forward, we talk with the hospital or
                provider on your behalf and keep you posted until there is a
                clearer, fairer number.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

function CheckIcon() {
  return (
    <svg
      className="check"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="14" fill="#E85D04" />
      <path
        d="M8 14.5 12.2 18.5 20 10"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
