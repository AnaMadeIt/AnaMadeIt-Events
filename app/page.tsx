"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function Page() {
  const tabs = ["home", "about", "services", "proposals", "contact"];
  const [activeTab, setActiveTab] = useState("home");
  const [currentProposalIndex, setCurrentProposalIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const proposalImages = useMemo(
    () => [
      "/proposals-gallery/proposal1.jpg",
      "/proposals-gallery/proposal2.jpg",
      "/proposals-gallery/proposal3.jpg",
      "/proposals-gallery/proposal4.jpg",
      "/proposals-gallery/proposal5.jpg",
    ],
    []
  );

  useEffect(() => {
    if (activeTab !== "proposals" || proposalImages.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentProposalIndex((prev) => (prev + 1) % proposalImages.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab, proposalImages]);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerTop}>
          <h1 style={styles.logo}>Ana Made It Events</h1>

          <a
            href="https://instagram.com/anamadeit_events"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Ana Made It Events on Instagram"
            style={styles.instagramLink}
          >
            <InstagramIcon />
          </a>
        </div>

        <nav style={styles.nav}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                ...styles.navButton,
                ...(activeTab === tab ? styles.activeNavButton : {}),
              }}
            >
              {capitalize(tab)}
            </button>
          ))}
        </nav>
      </header>

      <main style={styles.main}>
        {activeTab === "home" && (
          <section style={styles.section}>
            <h2 style={styles.heading}>Welcome</h2>
            <p style={styles.text}>
              Creating thoughtful, elevated event experiences with beautiful
              design and intentional details.
            </p>
          </section>
        )}

        {activeTab === "about" && (
          <section style={styles.section}>
            <h2 style={styles.heading}>About</h2>
            <p style={styles.text}>
              Ana Made It Events specializes in curated celebrations, custom
              proposals, and memorable event styling.
            </p>
          </section>
        )}

        {activeTab === "services" && (
          <section style={styles.section}>
            <h2 style={styles.heading}>Services</h2>
            <div style={styles.cardGrid}>
              <div style={styles.card}>Proposal Planning</div>
              <div style={styles.card}>Event Design</div>
              <div style={styles.card}>Floral Styling</div>
              <div style={styles.card}>Day-Of Coordination</div>
            </div>
          </section>
        )}

        {activeTab === "proposals" && (
          <section style={styles.section}>
            <h2 style={styles.heading}>Proposal Gallery</h2>
            <p style={styles.text}>
              Selected proposal moments from recent event setups.
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
                        ? "2px solid #000"
                        : "1px solid #ccc",
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
        )}

        {activeTab === "contact" && (
          <section style={styles.section}>
            <h2 style={styles.heading}>Contact</h2>
            <p style={styles.text}>Email: hello@anamadeitevents.com</p>
            <p style={styles.text}>Instagram: @anamadeit_events</p>
          </section>
        )}
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

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f9f6f2",
    color: "#222",
  },
  header: {
    padding: "24px 40px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  headerTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    marginBottom: "16px",
  },
  logo: {
    margin: 0,
    fontSize: "2rem",
  },
  instagramLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#222",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  navButton: {
    padding: "10px 16px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    borderRadius: "999px",
    fontSize: "0.95rem",
  },
  activeNavButton: {
    backgroundColor: "#222",
    color: "#fff",
    border: "1px solid #222",
  },
  main: {
    padding: "40px",
  },
  section: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "12px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "28px",
    borderRadius: "16px",
    border: "1px solid #e5e5e5",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  slideshowWrapper: {
    marginTop: "28px",
    width: "100%",
    maxWidth: "900px",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    borderRadius: "20px",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    background: "none",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
  },
  thumbnailImage: {
    width: "100px",
    height: "80px",
    objectFit: "cover",
    display: "block",
  },
};