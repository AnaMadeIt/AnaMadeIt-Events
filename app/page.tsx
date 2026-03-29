"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function Page() {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Services", id: "services" },
    { label: "Proposals", id: "proposals" },
    { label: "Contact", id: "contact" },
  ];

  const [currentProposalIndex, setCurrentProposalIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const proposalImages = useMemo(
    () => [
      "/proposal-gallery/proposal1.jpg",
      "/proposal-gallery/proposal2.jpg",
      "/proposal-gallery/proposal3.jpg",
      "/proposal-gallery/proposal4.jpg",
      "/proposal-gallery/proposal5.jpg",
    ],
    []
  );

  useEffect(() => {
    if (proposalImages.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentProposalIndex((prev) => (prev + 1) % proposalImages.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [proposalImages]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerTop}>
          <div>
            <p style={styles.eyebrow}>Luxury Event Planning & Floral Styling</p>
            <h1 style={styles.logo}>Ana Made It Events</h1>
            <p style={styles.tagline}>
              Thoughtful celebrations, beautiful details, unforgettable moments.
            </p>
          </div>

          <div style={styles.topRightContact}>
            <a
              href="https://instagram.com/anamadeit_events"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Ana Made It Events on Instagram"
              style={styles.instagramLink}
            >
              <InstagramIcon />
            </a>

            <a href="tel:6167062828" style={styles.headerContactLink}>
              616-706-2828
            </a>

            <a
              href="mailto:anabelle1030@gmail.com"
              style={styles.headerContactLink}
            >
              anabelle1030@gmail.com
            </a>
          </div>
        </div>

        <nav style={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={styles.navButton}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main style={styles.main}>
        <section id="home" style={styles.section}>
          <div style={styles.heroCard}>
            <p style={styles.smallLabel}>CURATED EVENT EXPERIENCES</p>
            <h2 style={styles.heroTitle}>
              Elegant celebrations for weddings, proposals, birthdays, floral
              arrangements, and custom events designed with intention, beauty,
              and timeless detail.
            </h2>

            <div style={styles.featureGrid}>
              <div style={styles.featurePill}>Over 20 years of event experience</div>
              <div style={styles.featurePill}>Luxury floral and design styling</div>
              <div style={styles.featurePill}>Personalized planning from A to Z</div>
              <div style={styles.featurePill}>Seamless celebrations with timeless detail</div>
            </div>
          </div>
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.contentCard}>
            <p style={styles.smallLabel}>ABOUT ME</p>
            <h2 style={styles.heading}>Designed with heart and elevated taste</h2>
            <p style={styles.text}>
              Ana Made It Events is built around creating meaningful,
              beautifully styled moments that feel personal, elegant, and
              unforgettable. With a love for design, floral detail, and
              thoughtful planning, Ana brings a warm and polished touch to every
              celebration.
            </p>
            <p style={styles.text}>
              From romantic proposals to refined private events, the goal is
              always the same: to turn your vision into a seamless experience
              that feels effortless, special, and true to you.
            </p>
          </div>
        </section>

        <section id="services" style={styles.section}>
          <p style={styles.smallLabel}>SERVICES</p>
          <h2 style={styles.heading}>Signature offerings</h2>

          <div style={styles.cardGrid}>
            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Proposal Planning</h3>
              <p style={styles.cardText}>
                Romantic setups and unforgettable moments tailored to your story.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Event Design</h3>
              <p style={styles.cardText}>
                Cohesive event styling with an elegant, elevated visual identity.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Floral Arrangements</h3>
              <p style={styles.cardText}>
                Custom floral design that brings softness, beauty, and luxury to
                each event.
              </p>
            </div>

            <div style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>Day-Of Coordination</h3>
              <p style={styles.cardText}>
                Calm, organized support so every detail flows beautifully on the
                day.
              </p>
            </div>
          </div>
        </section>

        <section id="proposals" style={styles.section}>
          <p style={styles.smallLabel}>PROPOSALS</p>
          <h2 style={styles.heading}>Proposal Gallery</h2>
          <p style={styles.text}>
            A glimpse into some of our romantic and thoughtfully designed
            proposal moments.
          </p>

          <div style={styles.slideshowWrapper}>
            <img
              src={proposalImages[currentProposalIndex]}
              alt={`Proposal ${currentProposalIndex + 1}`}
              style={{
                ...styles.slideshowImage,
                opacity: fade ? 1 : 0,
              }}
            />
          </div>

          <div style={styles.thumbnailRow}>
            {proposalImages.map((image, index) => (
              <button
                key={image}
                onClick={() => {
                  setCurrentProposalIndex(index);
                  setFade(true);
                }}
                style={{
                  ...styles.thumbnailButton,
                  border:
                    currentProposalIndex === index
                      ? "2px solid #d88ea0"
                      : "1px solid #ead7dc",
                }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  style={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.contentCard}>
            <p style={styles.smallLabel}>CONTACT</p>
            <h2 style={styles.heading}>Let’s create something beautiful</h2>
            <p style={styles.text}>
              Reach out directly to start planning your next event.
            </p>

            <div style={styles.contactButtonGroup}>
              <a
                href="https://instagram.com/anamadeit_events"
                target="_blank"
                rel="noreferrer"
                style={styles.contactButton}
              >
                Instagram
              </a>

              <a href="tel:6167062828" style={styles.contactButton}>
                Call Ana
              </a>

              <a
                href="mailto:anabelle1030@gmail.com"
                style={styles.contactButton}
              >
                Email Ana
              </a>
            </div>

            <div style={styles.contactDetails}>
              <p style={styles.text}>
                <strong>Instagram:</strong> @anamadeit_events
              </p>
              <p style={styles.text}>
                <strong>Phone:</strong> 616-706-2828
              </p>
              <p style={styles.text}>
                <strong>Email:</strong> anabelle1030@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 28, height: 28 }}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Georgia, serif",
    minHeight: "100vh",
    background:
      "linear-gradient(to bottom, #fff8fa 0%, #fdf1f4 45%, #fffafb 100%)",
    color: "#5f4a52",
    scrollBehavior: "smooth",
  },
  header: {
    padding: "28px 40px 22px",
    borderBottom: "1px solid #f0d9df",
    background: "rgba(255, 250, 251, 0.92)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "24px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.72rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#bf8b98",
  },
  logo: {
    margin: "8px 0 8px",
    fontSize: "2.6rem",
    fontWeight: 500,
    color: "#c97a91",
  },
  tagline: {
    margin: 0,
    fontSize: "1rem",
    color: "#8b6b75",
    fontStyle: "italic",
    maxWidth: "680px",
    lineHeight: 1.6,
  },
  topRightContact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
  },
  instagramLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#c97a91",
    textDecoration: "none",
    backgroundColor: "#fff",
    border: "1px solid #efd6dd",
    borderRadius: "999px",
    width: "48px",
    height: "48px",
    boxShadow: "0 8px 24px rgba(201, 122, 145, 0.10)",
    flexShrink: 0,
  },
  headerContactLink: {
    color: "#8b6b75",
    textDecoration: "none",
    fontSize: "0.96rem",
    lineHeight: 1.4,
  },
  nav: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  navButton: {
    padding: "10px 18px",
    border: "1px solid #ecd6dc",
    backgroundColor: "#fffafb",
    color: "#8f6773",
    cursor: "pointer",
    borderRadius: "999px",
    fontSize: "0.95rem",
    textTransform: "capitalize",
    boxShadow: "0 2px 10px rgba(201, 122, 145, 0.05)",
  },
  main: {
    padding: "28px 24px 64px",
  },
  section: {
    maxWidth: "1120px",
    margin: "0 auto 34px",
    scrollMarginTop: "160px",
  },
  heroCard: {
    background: "rgba(255,255,255,0.78)",
    border: "1px solid #f2dbe1",
    borderRadius: "28px",
    padding: "42px 36px",
    boxShadow: "0 20px 50px rgba(201, 122, 145, 0.10)",
  },
  contentCard: {
    background: "rgba(255,255,255,0.82)",
    border: "1px solid #f2dbe1",
    borderRadius: "24px",
    padding: "36px 32px",
    boxShadow: "0 18px 40px rgba(201, 122, 145, 0.08)",
  },
  smallLabel: {
    margin: 0,
    fontSize: "0.75rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#c08c99",
  },
  heroTitle: {
    fontSize: "2rem",
    lineHeight: 1.5,
    color: "#7d5b66",
    marginTop: "16px",
    marginBottom: "28px",
    fontWeight: 500,
  },
  heading: {
    fontSize: "2rem",
    color: "#c97a91",
    marginTop: "12px",
    marginBottom: "16px",
    fontWeight: 500,
  },
  text: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#7e646d",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "18px",
  },
  featurePill: {
    backgroundColor: "#fff",
    border: "1px solid #f0d6de",
    borderRadius: "18px",
    padding: "16px 18px",
    color: "#8b6873",
    boxShadow: "0 10px 22px rgba(201, 122, 145, 0.06)",
    fontSize: "0.96rem",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "22px",
    marginTop: "24px",
  },
  serviceCard: {
    background: "rgba(255,255,255,0.85)",
    border: "1px solid #efd7de",
    padding: "28px",
    borderRadius: "22px",
    boxShadow: "0 14px 34px rgba(201, 122, 145, 0.08)",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "12px",
    color: "#bb7389",
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  cardText: {
    margin: 0,
    color: "#80656e",
    lineHeight: 1.7,
    fontSize: "0.98rem",
  },
  slideshowWrapper: {
    marginTop: "28px",
    width: "100%",
    maxWidth: "920px",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    borderRadius: "24px",
    backgroundColor: "#f6e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 22px 48px rgba(201, 122, 145, 0.14)",
    border: "1px solid #efd8df",
  },
  slideshowImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out",
    display: "block",
  },
  thumbnailRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  thumbnailButton: {
    padding: 0,
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(201, 122, 145, 0.08)",
  },
  thumbnailImage: {
    width: "100px",
    height: "80px",
    objectFit: "cover",
    display: "block",
  },
  contactButtonGroup: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "18px",
    marginBottom: "18px",
  },
  contactButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #d88ea0, #c97a91)",
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.96rem",
    boxShadow: "0 10px 24px rgba(201, 122, 145, 0.18)",
  },
  contactDetails: {
    marginTop: "6px",
  },
};