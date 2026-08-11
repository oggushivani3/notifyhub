import Link from "next/link";

export default function Home() {
  return (
    <main className="new-home">

      {/* NAVBAR */}
      <nav className="new-navbar">

        <Link href="/" className="new-logo">
          <span className="logo-mark">N</span>

          <span>
            Notify<span>Hub</span>
          </span>
        </Link>

        <div className="new-nav-links">

          <Link href="/" className="new-nav-active">
            Home
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

      </nav>


      {/* HERO */}
      <section className="new-hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="new-hero-content">

          <div className="new-status">
            <span></span>
            CAMPUS INFORMATION, SIMPLIFIED
          </div>

          <h1>
            Never miss a campus update.
          </h1>

          <p>
            Your centralized digital platform for announcements, events,
            alerts and important campus communications.
          </p>

          <div className="new-hero-buttons">

            <Link href="/contact" className="new-primary">
              Get Started
              <span>→</span>
            </Link>

            <a href="#features" className="new-secondary">
              Explore NotifyHub
            </a>

          </div>

        </div>


        {/* ANNOUNCEMENT PREVIEW */}
        <div className="announcement-preview">

          <div className="preview-top">

            <div>
              <small>NOTIFYHUB</small>
              <h3>Latest Updates</h3>
            </div>

            <div className="live-dot">
              <span></span>
              LIVE
            </div>

          </div>


          <div className="notice urgent">

            <div className="notice-icon">
              !
            </div>

            <div>
              <small>IMPORTANT</small>
              <h4>Semester Examination Schedule</h4>
              <p>Updated 10 minutes ago</p>
            </div>

          </div>


          <div className="notice">

            <div className="notice-icon blue">
              ◆
            </div>

            <div>
              <small>EVENT</small>
              <h4>Annual Tech Fest 2026</h4>
              <p>Registration is now open</p>
            </div>

          </div>


          <div className="notice">

            <div className="notice-icon green">
              ✓
            </div>

            <div>
              <small>NOTICE</small>
              <h4>Library Timings Updated</h4>
              <p>View the latest information</p>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section id="features" className="new-features">

        <div className="section-tag">
          WHY NOTIFYHUB
        </div>

        <h2>
          Everything your campus needs
        </h2>

        <p className="section-intro">
          A single digital space designed to make campus communication
          faster, clearer and easier.
        </p>


        {/* FEATURE GRID */}
        <div className="new-feature-grid">


          {/* FEATURE 1 */}
          <div className="new-feature-card large">

            <div className="feature-number">
              01
            </div>

            <div className="new-feature-icon cyan">
              ◈
            </div>

            <h3>
              Instant Announcements
            </h3>

            <p>
              Important notices reach students digitally instead
              of getting lost on physical notice boards.
            </p>

          </div>


          {/* FEATURE 2 */}
          <div className="new-feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="new-feature-icon coral">
              !
            </div>

            <h3>
              Urgent Alert System
            </h3>

            <p>
              Important deadlines and drives get priority alerts.
            </p>

          </div>


          {/* FEATURE 3 */}
          <div className="new-feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="new-feature-icon yellow">
              ◷
            </div>

            <h3>
              Live Event Tracker
            </h3>

            <p>
              Track upcoming events and never miss registrations.
            </p>

          </div>


          {/* FEATURE 4 */}
          <div className="new-feature-card">

            <div className="feature-number">
              04
            </div>

            <div className="new-feature-icon green">
              🔍
            </div>

            <h3>
              Smart Search &amp; Filter
            </h3>

            <p>
              Find notices using departments, categories, or dates.
            </p>

          </div>


          {/* FEATURE 5 */}
          <div className="new-feature-card">

            <div className="feature-number">
              05
            </div>

            <div className="new-feature-icon cyan">
              📱
            </div>

            <h3>
              Works Everywhere
            </h3>

            <p>
              Access NotifyHub across mobile, tablet, and desktop.
            </p>

          </div>


          {/* FEATURE 6 */}
          <div className="new-feature-card">

            <div className="feature-number">
              06
            </div>

            <div className="new-feature-icon coral">
              ⚡
            </div>

            <h3>
              Real-Time Updates
            </h3>

            <p>
              Stay updated without checking multiple platforms.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="new-cta">

        <div className="cta-decoration"></div>

        <div>

          <div className="section-tag">
            STAY CONNECTED
          </div>

          <h2>
            Never miss what
            <br />
            matters on campus.
          </h2>

          <p>
            NotifyHub keeps your college communication
            simple and accessible.
          </p>

        </div>

        <Link
          href="/contact"
          className="new-cta-button"
        >
          Contact NotifyHub →
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="new-footer">

        <div className="new-logo">

          <span className="logo-mark">
            N
          </span>

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