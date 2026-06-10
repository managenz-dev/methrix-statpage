import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'domains', 'about', 'waitlist'];
      const scrollPos = window.scrollY + 150;
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  const domains = [
    'Product Management',
    'Marketing Strategy',
    'Sales & Negotiation',
    'Finance & Budgeting',
    'Operations',
    'Human Resources',
    'Business Strategy',
    'Entrepreneurship'
  ];

  return (
    <>
      {/* NAVIGATION */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <img src="/logo.png" alt="METHRIX" />
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('domains')}
              className={activeSection === 'domains' ? 'active' : ''}
            >
              Domains
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              Vision
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="nav-cta"
            >
              Join Waitlist
            </button>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-text">METHRIX</div>
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-eyebrow">Concept & Framework Development</div>
            <h1 className="hero-title">
              Where Decisions
              <br />
              Build <em>Real-World</em>
              <br />
              <strong>Judgment</strong>
            </h1>
            <p className="hero-desc">
              METHRIX is a simulation-based learning platform currently under development, designed to help management students and early professionals build genuine decision-making ability through practice, consequence, and personalised feedback.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToSection('about')}>
                Our Vision
              </button>
              <button className="btn-outline" onClick={() => scrollToSection('waitlist')}>
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-logo">
              <img src="/logo1.png" alt="METHRIX Logo" />
            </div>
            <div className="hero-card-grid">
              <div className="hero-stat-card">
                <div className="stat-num">100+</div>
                <div className="stat-label">Designed for Unique Simulations</div>
                <div className="stat-desc">8 domains × 3 user types × 3 difficulty levels — all planned for one intelligent engine</div>
              </div>
              <div className="hero-stat-card">
                <div className="stat-num">25</div>
                <div className="stat-label">Decisions Per Simulation</div>
              </div>
              <div className="hero-stat-card">
                <div className="stat-num">5</div>
                <div className="stat-label">Core Judgment Dimensions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STATUS */}
      <section className="section" style={{ padding: '3rem 3rem', background: 'var(--white)', borderBottom: '1px solid var(--gray-100)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Current Stage</div>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Where We Are Right Now</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {['Concept & Framework Development', 'Simulation Architecture Design', 'Domain Research & Validation', 'Prototype Planning'].map((status, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--green-ultra)',
                  color: 'var(--green)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--green-pale)',
                }}
              >
                {status}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE - FIXED */}
      <div className="marquee-section">
        <div className="marquee-track">
          {/* First set */}
          {domains.map((item, idx) => (
            <div key={`set1-${idx}`} className="marquee-item">
              {item} <span>◆</span>
            </div>
          ))}
          {/* Second set (duplicate for seamless loop) */}
          {domains.map((item, idx) => (
            <div key={`set2-${idx}`} className="marquee-item">
              {item} <span>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* METHODOLOGY */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="section-inner">
          <div className="section-tag">The Methodology</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end', marginBottom: '0.5rem' }}>
            <h2 className="section-title">Built for <em>Real Judgment</em></h2>
            <p className="section-subtitle">METHRIX aims to replace passive learning with deliberate practice. Users will step into simulated work environments, make interconnected decisions, and receive coaching designed to actually stick.</p>
          </div>
          <div className="services-grid">
            {[
              { num: '01', icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: 'Simulation-Based Learning', desc: 'The platform will feature 25 interconnected decisions per simulation, structured across 4 acts — each with compounding consequences designed to mirror real workplace complexity.' },
              { num: '02', icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Three User Archetypes', desc: 'Experiences are being tailored for Student Explorers, Placement Prep learners, and Junior Professionals — each with distinct coaching tones and deliverables.' },
              { num: '03', icon: <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, title: 'Five Dimension Scoring', desc: 'Every decision will be evaluated across Strategy, Leadership, Stakeholder, Execution, and Risk — producing a nuanced, honest Decision Profile.' },
              { num: '04', icon: <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: 'Personalised Feedback Engine', desc: 'A context-aware coaching engine will adapt to choices, user type, and performance patterns — not generic advice, but a mirror of actual decisions.' },
              { num: '05', icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>, title: 'Career-Ready Output', desc: 'Users will receive downloadable reports — Interview Briefs, Learning Debriefs, or Credibility Reports — formatted for interviews, performance reviews, and personal growth.' },
              { num: '06', icon: <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'Longitudinal Tracking', desc: 'The Decision Profile will evolve with every simulation. Users will be able to track dimension trends, unlock levels, and watch their judgment sharpen over time.' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="service-num">{service.num}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <div className="highlight-strip">
        <div className="highlight-inner">
          <div>
            <div className="section-tag">Why METHRIX</div>
            <h2 className="section-title" style={{ color: 'white' }}>Practice, Not <em style={{ color: 'rgba(255,255,255,0.75)' }}>Passive</em><br />Learning</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '420px' }}>What you decide matters more than what you know. METHRIX is being designed as the judgment gym where management skills are built through deliberate practice and real consequences.</p>
            <button className="btn-outline" style={{ marginTop: '2rem', borderColor: 'rgba(255,255,255,0.5)', color: 'white' }} onClick={() => scrollToSection('about')}>
              Learn About Our Vision
            </button>
          </div>
          <ul className="highlight-list">
            {[
              '6 nuanced decision options per question will be provided — none obviously wrong, all realistic',
              'Deterministic scoring will ensure: identical decision paths will always produce identical results',
              'Compounding consequences will mean: early choices will affect what options appear later',
              'Four ending profiles per simulation will be generated — each with a personalised narrative story',
              'A free diagnostic tier will be available — no account required to start',
              'Full platform access will be available for individuals and institutions on request'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <span className="check-icon">
                  <svg viewBox="0 0 12 12"><polyline points="2 6 5 9 10 3" /></svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* JOIN EARLY INTEREST */}
      <section className="section" style={{ background: 'var(--gray-50)', padding: '4rem 3rem' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Join the Journey</div>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 1.25rem' }}>Join the <em>Early Interest List</em></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 2.5rem', maxWidth: '460px', textAlign: 'center' }}>Be the first to know when METHRIX launches. Join our waitlist to get notified and secure early access to the platform.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => scrollToSection('waitlist')}>Join Waitlist</button>
            <button className="btn-outline" onClick={() => scrollToSection('about')}>Our Vision</button>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <div id="domains">
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-hero-eyebrow">Our Domains</div>
            <h1>Master Every <em>Function</em></h1>
            <p>From product to finance, the simulations will cover the core functions of modern management. Explore the domains we are currently designing.</p>
          </div>
        </div>
        <section className="section">
          <div className="section-inner">
            <div className="domains-grid">
              {[
                { icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: 'Product Management', desc: 'Roadmap prioritization, user feedback integration, and cross-functional alignment.' },
                { icon: <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>, title: 'Marketing Strategy', desc: 'Campaign allocation, brand positioning, market segmentation, and Go-To-Market execution.' },
                { icon: <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: 'Sales & Negotiation', desc: 'Client handling, pricing negotiation, closing strategies, and pipeline management.' },
                { icon: <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'Finance & Budgeting', desc: 'Resource allocation, ROI analysis, cost optimization, and financial forecasting.' },
                { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, title: 'Operations', desc: 'Supply chain logistics, process optimization, bottleneck resolution, and quality control.' },
                { icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Human Resources', desc: 'Talent acquisition, conflict resolution, team performance, and organizational culture.' },
                { icon: <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>, title: 'Business Strategy', desc: 'Market entry, competitive analysis, long-term vision, and strategic pivots.' },
                { icon: <svg viewBox="0 0 24 24"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/></svg>, title: 'Entrepreneurship', desc: 'Early-stage pivots, investor relations, product-market fit, and scaling challenges.' }
              ].map((domain, idx) => (
                <motion.div
                  key={idx}
                  className="domain-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="domain-icon">{domain.icon}</div>
                  <h3>{domain.title}</h3>
                  <p>{domain.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* RESEARCH */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="section-inner">
          <div className="section-tag">The Research Foundation</div>
          <h2 className="section-title">Why We Need a <em>New Approach</em></h2>
          <p className="section-subtitle">Management education has relied on the same assessment methods for decades. Here is why we believe a shift is necessary.</p>
          <div className="research-grid">
            {[
              { title: 'The Limitation of MCQs', desc: 'Traditional multiple-choice questions test recall and theoretical knowledge, but fail to capture how a candidate weighs trade-offs, handles ambiguity, or navigates stakeholder pressure in real time.' },
              { title: 'The Gap in Experiential Learning', desc: 'Case studies and role-plays are valuable, but they lack the compounding consequences of real decisions. Without a feedback loop that tracks longitudinal growth, it\'s hard to measure actual judgment.' },
              { title: 'The Power of Simulation', desc: 'By placing learners in dynamic, interconnected scenarios, METHRIX aims to measure decision-making as it happens. This experiential assessment will provide a far more accurate mirror of managerial potential.' }
            ].map((research, idx) => (
              <motion.div
                key={idx}
                className="research-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3>{research.title}</h3>
                <p>{research.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section">
        <div className="section-inner">
          <div className="section-tag">Our Audience</div>
          <h2 className="section-title">Who We Are <em>Building For</em></h2>
          <p className="section-subtitle">METHRIX is being designed to serve the entire management ecosystem, from individual learners to large institutions.</p>
          <div className="audience-grid">
            {[
              { icon: <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, title: 'Management Students' },
              { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, title: 'MBA Aspirants' },
              { icon: <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, title: 'Junior Professionals' },
              { icon: <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="6"/><polyline points="8 10 12 6 16 10"/></svg>, title: 'Educational Institutions' },
              { icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Corporate L&D' }
            ].map((audience, idx) => (
              <motion.div
                key={idx}
                className="audience-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="audience-icon">{audience.icon}</div>
                <h4>{audience.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT/VISION */}
      <div id="about">
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-hero-eyebrow">Our Vision</div>
            <h1>We Are Building <em>METHRIX</em></h1>
            <p>Built on the belief that judgment is a skill — not a trait — we are creating a platform where management ability is developed through practice, consequence, and honest feedback.</p>
          </div>
        </div>

        <section className="section">
          <div className="section-inner">
            <div className="about-grid">
              <div className="about-visual">
                <div className="about-img-box">
                  <img src="/logo1.png" alt="METHRIX Logo" />
                </div>
                <div className="about-badge">
                  <span className="about-badge-num">2026</span>
                  <span className="about-badge-label">Founded</span>
                </div>
              </div>
              <div className="about-content">
                <div className="section-tag">Who We Are</div>
                <h2 className="section-title">A Platform <em>Built for</em> the Deciding Mind</h2>
                <p>METHRIX is being founded on a simple but powerful insight: management students spend thousands of hours absorbing frameworks and theories, yet arrive at their first roles unable to make a confident decision under pressure. The knowledge is there — the judgment isn't.</p>
                <p>We are building METHRIX to close that gap. Our simulation engine is being designed to place users inside realistic workplace scenarios, force them to make 25 interconnected decisions with real consequences, and deliver personalised coaching that mirrors their actual thinking patterns — not a generic rubric.</p>
                <p>From Product Management to Entrepreneurship, from placement-stage students to junior professionals two years into their first role, METHRIX will tailor every experience to where the user is and where they're trying to go. Our scoring will be transparent, our feedback will be honest, and our goal is simple: help people become managers who actually know how to decide.</p>
                <button className="btn-primary" onClick={() => scrollToSection('waitlist')}>Join the Waitlist</button>
              </div>
            </div>

            <div className="values-grid">
              {[
                { icon: <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Judgment First', desc: 'We believe the gap between knowing and deciding is the most important one to close.' },
                { icon: <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, title: 'Transparency', desc: 'Integer-only scoring, fixed grade bands, no hidden weights — every result will be fully auditable.' },
                { icon: <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: 'Honest Feedback', desc: 'We will show blind spots without shame. Growth starts with an accurate mirror, not false praise.' },
                { icon: <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>, title: 'Deliberate Practice', desc: 'Real skill comes from repetition with feedback — not passive consumption of content.' }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  className="value-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="highlight-strip">
          <div className="highlight-inner">
            <div>
              <div className="section-tag">Design Architecture</div>
              <h2 className="section-title" style={{ color: 'white' }}>Numbers That <em style={{ color: 'rgba(255,255,255,0.75)' }}>Speak</em></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontWeight: 300 }}>Every number below reflects a deliberate design decision baked into the planned platform architecture.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {[
                { num: '100+', label: 'Planned Simulations' },
                { num: '8', label: 'Management Domains' },
                { num: '25', label: 'Decisions Per Run' },
                { num: '3', label: 'User Archetypes' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 600, color: 'white', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '0.4rem' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ROADMAP */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="section-inner">
          <div className="section-tag">Our Roadmap</div>
          <h2 className="section-title">Building the <em>Future</em> of Assessment</h2>
          <p className="section-subtitle">Building the future of management assessment, one phase at a time. Here is how we plan to bring METHRIX to life.</p>
          <div className="roadmap-grid">
            {[
              { num: 1, title: 'Concept & Framework', desc: 'Defining the core methodology, scoring dimensions, and user archetypes.', active: true },
              { num: 2, title: 'Engine Prototype', desc: 'Developing the underlying engine to handle interconnected decisions and deterministic scoring.' },
              { num: 3, title: 'Pilot Testing', desc: 'Running closed beta simulations with a select group of students and professionals to validate the framework.' },
              { num: 4, title: 'Feedback & Iteration', desc: 'Refining the coaching algorithms, report formats, and user experience based on pilot data.' },
              { num: 5, title: 'Public Release', desc: 'Launching the platform to individual learners and institutional partners.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className={`roadmap-step ${step.active ? 'active' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="roadmap-dot">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {step.active && <span className="roadmap-status">Current Stage</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <div id="waitlist">
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-hero-eyebrow">Join the Waitlist</div>
            <h1>Be Notified When <em>METHRIX</em> Launches</h1>
            <p>Whether you're a student, a placement officer, an L&D head, or an investor — we'd love to keep you updated on our progress and notify you when we launch.</p>
          </div>
        </div>
        <section className="section">
          <div className="section-inner">
            <div className="contact-layout">
              <div className="contact-info-block">
                <div>
                  <div className="section-tag">Project Inquiries</div>
                  <h2 className="section-title" style={{ fontSize: '2rem' }}>We're <em>Here</em> for You</h2>
                </div>
                {[
                  { icon: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Headquarters', value: 'Puducherry', sub: 'India' },
                  { icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'General Inquiries', value: 'methrix@gmail.com', sub: 'We respond within 24 hours' },
                  { icon: <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: 'Institutional Partnerships', value: 'institutions@methrix.in', sub: 'For colleges, placement cells & corporate L&D teams' },
                  { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: 'Early Access', value: 'Join the waitlist to secure early access', sub: 'We will notify you when the platform is ready' }
                ].map((item, idx) => (
                  <div key={idx} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                      <div className="contact-item-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {!formSubmitted ? (
                  <div className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="Arjun" />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Mehta" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="arjun@college.edu" />
                    </div>
                    <div className="form-group">
                      <label>Organisation / College</label>
                      <input type="text" placeholder="Your Institution or Company" />
                    </div>
                    <div className="form-group">
                      <label>I am interested as a…</label>
                      <select>
                        <option value="">Select your profile…</option>
                        <option>Student / MBA Aspirant</option>
                        <option>Junior Professional</option>
                        <option>Faculty / Placement Officer</option>
                        <option>Corporate L&D / HR</option>
                        <option>Investor / Partner</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Message (Optional)</label>
                      <textarea placeholder="Tell us what you're looking for, or just say hello…"></textarea>
                    </div>
                    <button className="btn-primary" onClick={handleSubmit} style={{ alignSelf: 'flex-start', padding: '1rem 3rem' }}>
                      Join the Waitlist →
                    </button>
                  </div>
                ) : (
                  <div style={{ padding: '3rem', background: 'var(--green-ultra)', border: '1px solid var(--green-pale)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" style={{ stroke: 'var(--green)', fill: 'none', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--green)', marginBottom: '0.5rem' }}>You're on the List!</h3>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Thank you for joining the waitlist. We'll be in touch when METHRIX is ready for you.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER - FULL WHITE */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/logo.png" alt="METHRIX" />
              <p>METHRIX is a simulation-based learning platform currently under development, designed to help management students and early professionals build real judgment through deliberate practice and personalised feedback.</p>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <button onClick={() => scrollToSection('about')}>Our Vision</button>
              <button onClick={() => scrollToSection('waitlist')}>Join Waitlist</button>
            </div>
            <div className="footer-col">
              <h5>Platform</h5>
              <button onClick={() => scrollToSection('home')}>Methodology</button>
              <button onClick={() => scrollToSection('domains')}>Domains</button>
              <button onClick={() => scrollToSection('about')}>Research</button>
              <button onClick={() => scrollToSection('about')}>Roadmap</button>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <button onClick={() => scrollToSection('waitlist')}>Contact Us</button>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter / X</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 METHRIX Learning Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="footer-socials">
              <button className="footer-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
              <button className="footer-social" aria-label="Twitter / X">
                <svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>
              </button>
              <button className="footer-social" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;