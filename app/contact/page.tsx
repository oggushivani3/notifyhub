import Link from "next/link";

export default function Contact() {
  return (
    <main className="new-contact">

      {/* NAVBAR */}
      <nav className="new-navbar">

        <Link href="/" className="new-logo">
          <span className="logo-mark">N</span>

          <span>
            Notify<span>Hub</span>
          </span>
        </Link>

        <div className="new-nav-links">
          <Link href="/">
            Home
          </Link>

          <Link href="/contact" className="new-nav-active">
            Contact
          </Link>
        </div>

      </nav>


      {/* CONTACT HEADER */}
      <section className="contact-header">

        <div className="section-tag">
          GET IN TOUCH
        </div>

        <h1>
          Contact & Support
        </h1>

        <p>
          Have a question, suggestion or issue?
          Send us a message and we'll get back to you.
        </p>

      </section>


      {/* CONTACT GRID */}
      <section className="contact-grid">

        {/* LEFT */}
        <div className="contact-info">

          <div className="info-card main-info">

            <div className="info-symbol">
              ✦
            </div>

            <h2>
              We're here to help.
            </h2>

            <p>
              Whether you have feedback about NotifyHub or
              need help with a campus announcement, we'd love
              to hear from you.
            </p>

          </div>


          <div className="info-card">

            <div className="small-icon">
              @
            </div>

            <div>
              <small>EMAIL</small>
              <h3>notifyhub@college.edu</h3>
            </div>

          </div>


          <div className="info-card">

            <div className="small-icon">
              ?
            </div>

            <div>
              <small>RESPONSE TIME</small>
              <h3>Usually within 24 hours</h3>
            </div>

          </div>

        </div>


        {/* FORM */}
        <div className="new-contact-form">

          <div className="form-heading">
            <h2>Send a message</h2>

            <p>
              Fill in the details below.
            </p>
          </div>


          <form>

            <div className="input-row">

              <div className="new-input">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                />

              </div>


              <div className="new-input">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

            </div>


            <div className="new-input">

              <label htmlFor="department">
                Department
              </label>

              <select
                id="department"
                defaultValue=""
              >

                <option value="" disabled>
                  Select department
                </option>

                <option value="cse">
                  Computer Science
                </option>

                <option value="ece">
                  Electronics
                </option>

                <option value="eee">
                  Electrical
                </option>

                <option value="mech">
                  Mechanical
                </option>

                <option value="admin">
                  Administration
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            <div className="new-input">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                placeholder="Tell us what you would like to know..."
              />

            </div>


            <button
              type="submit"
              className="new-submit"
            >
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </section>


      {/* FAQ */}
      <section className="new-faq">

        <div className="section-tag">
          QUICK ANSWERS
        </div>

        <h2>
          Frequently asked questions
        </h2>


        <div className="faq-grid">

          <details>
            <summary>
              Who can publish announcements?
            </summary>

            <p>
              Authorized college departments and administrators
              can publish announcements on NotifyHub.
            </p>
          </details>


          <details>
            <summary>
              How are urgent notices highlighted?
            </summary>

            <p>
              Important updates can be marked as urgent so
              students can identify them quickly.
            </p>
          </details>


          <details>
            <summary>
              Can students access NotifyHub on mobile?
            </summary>

            <p>
              Yes. The website is designed to work across
              desktop, tablet and mobile screens.
            </p>
          </details>


          <details>
            <summary>
              Can I suggest a new feature?
            </summary>

            <p>
              Absolutely. Send us a message through the contact
              form and share your suggestion.
            </p>
          </details>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="new-footer">

        <div className="new-logo">
          <span className="logo-mark">N</span>

          <span>
            Notify<span>Hub</span>
          </span>
        </div>

        <p>
          © 2026 NotifyHub · Smart Campus Communication
        </p>

      </footer>

    </main>
  );
}