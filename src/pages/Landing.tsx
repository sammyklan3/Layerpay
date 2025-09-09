import React from "react";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Zeno</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#docs">Docs</a>
            <a href="/login" className="btn-primary">
              Sign In
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Crypto Payments. Simplified.</h1>
          <p>
            Accept secure USDC and ETH payments on the Base blockchain with just
            a few lines of code.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn-primary">
              Get Started
            </a>
            <a href="#docs" className="btn-secondary">
              View Docs
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why LayerPay?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Fast Integration</h3>
            <p>Drop-in API to accept Base chain payments in minutes.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure by Design</h3>
            <p>Tokens settle directly on-chain, minimizing trust risks.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Developer Dashboard</h3>
            <p>
              Track transactions, manage webhooks, and test payments easily.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Accepting Crypto Payments Today</h2>
        <p>Build the future of payments on Base with LayerPay.</p>
        <a href="/register" className="btn-primary">
          Create Account
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} LayerPay. Built for developers, powered
          by Base.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
