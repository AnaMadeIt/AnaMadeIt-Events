"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("weddings");

  const packages = [
    {
      id: "weddings",
      title: "Weddings",
      subtitle: "Elegant planning from first vision to final dance.",
      items: [
        "Signature Package — ceremony styling, timeline coordination, and vendor guidance",
        "Luxury Package — full planning, floral styling, design direction, and day-of coordination",
        "Custom Wedding Experience — tailored planning for intimate, destination, or grand celebrations",
      ],
    },
    {
      id: "proposals",
      title: "Proposals",
      subtitle: "Romantic moments styled to feel unforgettable.",
      items: [
        "Classic Proposal Setup — candles, florals, and intimate décor",
        "Luxury Proposal Experience — custom concept, premium florals, signage, and styling",
        "Destination Proposal Planning — location styling and personalized setup details",
      ],
    },
    {
      id: "birthdays",
      title: "Birthdays",
      subtitle: "Beautiful celebrations for every milestone.",
      items: [
        "Signature Birthday Package — décor, setup, and curated party styling",
        "Luxury Birthday Experience — premium tablescape, florals, balloons, and custom details",
        "Milestone Celebration Design — 16th, 21st, 30th, 50th, and beyond",
      ],
    },
    {
      id: "floral",
      title: "Floral Arrangements",
      subtitle: "Soft, romantic florals with a hydrangea-inspired touch.",
      items: [
        "Custom Hydrangea Bouquets",
        "Event Floral Styling",
        "Centerpieces, arches, welcome tables, and statement floral moments",
      ],
    },
    {
      id: "custom",
      title: "Create Your Own Event",
      subtitle: "You imagine it. AnaMadeIt brings it to life.",
      items: [
        "Bridal showers",
        "Anniversaries",
        "Baby showers",
        "Private dinners, picnics, and one-of-a-kind celebrations",
      ],
    },
  ];

  const proposalGalleryImages = [
    { src: "/proposal-gallery/IMG_8695.JPG", alt: "Heart-shaped rose proposal installation" },
    { src: "/proposal-gallery/IMG_8696.JPG", alt: "Red rose proposal floral detail" },
    { src: "/proposal-gallery/IMG_8697.JPG", alt: "Proposal rose arrangements on rooftop" },
    { src: "/proposal-gallery/IMG_8698.JPG", alt: "White and red floral arrangement for proposal" },
    { src: "/proposal-gallery/IMG_8699.JPG", alt: "Couple in front of proposal installation" },
    { src: "/proposal-gallery/IMG_8700.JPG", alt: "Proposal setup walkway view" },
    { src: "/proposal-gallery/IMG_8701.JPG", alt: "Proposal sign with lights at night" },
    { src: "/proposal-gallery/IMG_8702.JPG", alt: "Couple proposal kiss photo" },
    { src: "/proposal-gallery/IMG_8703.JPG", alt: "Guests celebrating proposal event" },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      alt: "Elegant wedding table setting",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      alt: "Romantic proposal setup",
    },
    {
      src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80",
      alt: "Luxury birthday celebration décor",
    },
    {
      src: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80",
      alt: "Floral arrangement close up",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
      alt: "Elegant event place setting",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      alt: "Soft pink event styling",
    },
  ];

  const activeSection = packages.find((section) => section.id === activeTab) || packages[0];

  return (
    <main
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        color: "#5e4a52",
        backgroundColor: "#f8eef2",
        backgroundImage:
          'linear-gradient(rgba(248,238,242,0.88), rgba(248,238,242,0.94)), url("https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 20px 80px",
        }}
      >
        <header
          style={{
            background: "rgba(255,255,255,0.74)",
            border: "1px solid rgba(214,150,173,0.28)",
            borderRadius: "28px",
            padding: "72px 24px 56px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(160, 114, 135, 0.12)",
            backdropFilter: "blur(6px)",
          }}
        >
          <p
            style={{
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontSize: "12px",
              color: "#b57d93",
              marginBottom: "16px",
            }}
          >
            Luxury Event Planning & Floral Styling
          </p>
          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 78px)",
              color: "#cc6f95",
              margin: "0 0 12px",
              lineHeight: 1.05,
            }}
          >
            AnaMadeIt Events
          </h1>
          <p
            style={{
              fontSize: "clamp(18px, 2.6vw, 28px)",
              fontStyle: "italic",
              margin: "0 auto 20px",
              maxWidth: "780px",
            }}
          >
            Treat Yourself! Because Today Happened
          </p>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontFamily: "Arial, sans-serif",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#715c64",
            }}
          >
            Curated celebrations for weddings, proposals, birthdays, floral arrangements,
            and custom events designed with softness, beauty, and timeless detail.
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
            margin: "34px 0",
          }}
        >
          {[
            "Over 20 years of event experience",
            "Luxury floral and design styling",
            "Personalized planning from A to Z",
            "Seamless celebrations with timeless detail",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.84)",
                borderRadius: "22px",
                padding: "22px",
                border: "1px solid rgba(214,150,173,0.18)",
                boxShadow: "0 14px 35px rgba(160, 114, 135, 0.08)",
                fontFamily: "Arial, sans-serif",
                fontWeight: 600,
                lineHeight: 1.6,
              }}
            >
              {item}
            </div>
          ))}
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.86)",
            border: "1px solid rgba(214,150,173,0.22)",
            borderRadius: "28px",
            padding: "28px",
            boxShadow: "0 18px 50px rgba(160, 114, 135, 0.1)",
            backdropFilter: "blur(4px)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            {packages.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                style={{
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: activeTab === section.id ? "1px solid #cc6f95" : "1px solid rgba(214,150,173,0.25)",
                  background: activeTab === section.id ? "#cc6f95" : "rgba(255,255,255,0.92)",
                  color: activeTab === section.id ? "white" : "#c06189",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(160, 114, 135, 0.08)",
                }}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "18px",
            }}
          >
            <div>
              <p
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "11px",
                  color: "#b57d93",
                  margin: "0 0 10px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                Signature Service
              </p>
              <h2
                style={{
                  color: "#c06189",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  margin: "0 0 10px",
                }}
              >
                {activeSection.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#715c64",
                  maxWidth: "720px",
                }}
              >
                {activeSection.subtitle}
              </p>
            </div>
            <div
              style={{
                background: "#fff6f9",
                color: "#c06189",
                borderRadius: "999px",
                padding: "10px 16px",
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                border: "1px solid rgba(214,150,173,0.22)",
              }}
            >
              Custom quote available
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {activeSection.items.map((item) => (
              <div
                key={item}
                style={{
                  background: "linear-gradient(180deg, #fff8fb 0%, #fff2f7 100%)",
                  padding: "20px",
                  borderRadius: "20px",
                  border: "1px solid rgba(214,150,173,0.18)",
                  boxShadow: "0 10px 24px rgba(160, 114, 135, 0.06)",
                  fontFamily: "Arial, sans-serif",
                  lineHeight: 1.65,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {activeTab === "proposals" && (
            <div style={{ marginTop: "28px" }}>
              <p
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "11px",
                  color: "#b57d93",
                  margin: "0 0 10px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                Proposal Portfolio
              </p>
              <h3
                style={{
                  color: "#c06189",
                  fontSize: "clamp(24px, 3vw, 32px)",
                  margin: "0 0 10px",
                }}
              >
                Proposal Gallery
              </h3>
              <p
                style={{
                  margin: "0 0 20px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#715c64",
                  maxWidth: "760px",
                }}
              >
                A featured look at one of AnaMadeIt Events’ romantic rooftop proposal experiences.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "24px",
                    background: "#f6e5ec",
                    boxShadow: "0 18px 36px rgba(160, 114, 135, 0.12)",
                    border: "1px solid rgba(214,150,173,0.18)",
                    minHeight: "100%",
                  }}
                >
                  <img
                    src={proposalGalleryImages[0].src}
                    alt={proposalGalleryImages[0].alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "620px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {proposalGalleryImages.slice(1, 3).map((image) => (
                    <div
                      key={image.src}
                      style={{
                        overflow: "hidden",
                        borderRadius: "24px",
                        background: "#f6e5ec",
                        boxShadow: "0 14px 30px rgba(160, 114, 135, 0.1)",
                        border: "1px solid rgba(214,150,173,0.18)",
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: "100%",
                          height: "302px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "16px",
                }}
              >
                {proposalGalleryImages.slice(3).map((image) => (
                  <div
                    key={image.src}
                    style={{
                      overflow: "hidden",
                      borderRadius: "22px",
                      background: "#f6e5ec",
                      boxShadow: "0 14px 30px rgba(160, 114, 135, 0.1)",
                      border: "1px solid rgba(214,150,173,0.18)",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section
          id="gallery"
          style={{
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(214,150,173,0.22)",
            borderRadius: "28px",
            padding: "34px 28px",
            margin: "10px 0 24px",
            boxShadow: "0 18px 50px rgba(160, 114, 135, 0.1)",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "11px",
              color: "#b57d93",
              margin: "0 0 10px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Styled Moments
          </p>
          <h2
            style={{
              color: "#c06189",
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: "0 0 10px",
            }}
          >
            Image Gallery
          </h2>
          <p
            style={{
              margin: "0 0 24px",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#715c64",
              maxWidth: "760px",
            }}
          >
            Replace these images anytime with your own event photos to showcase your work,
            your floral style, and the atmosphere you create for clients.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.src}
                style={{
                  overflow: "hidden",
                  borderRadius: "22px",
                  background: "#f6e5ec",
                  boxShadow: "0 14px 30px rgba(160, 114, 135, 0.1)",
                  border: "1px solid rgba(214,150,173,0.18)",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(214,150,173,0.22)",
            borderRadius: "28px",
            padding: "34px 28px",
            boxShadow: "0 18px 50px rgba(160, 114, 135, 0.1)",
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "11px",
              color: "#b57d93",
              margin: "0 0 10px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Start Your Event
          </p>
          <h2
            style={{
              color: "#c06189",
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: "0 0 10px",
            }}
          >
            Contact AnaMadeIt Events
          </h2>
          <p
            style={{
              margin: "0 0 24px",
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#715c64",
              maxWidth: "760px",
            }}
          >
            This form can work as a real contact form once you replace the email address in the
            form action with the email where you want inquiries sent.
          </p>

          <form
            action="https://formsubmit.co/YOUR_EMAIL@example.com"
            method="POST"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            <input type="hidden" name="_subject" value="New AnaMadeIt Events Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://ana-made-it-events-kxwe.vercel.app" />

            <input name="name" placeholder="Your Name" required style={inputStyle} />
            <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
            <input name="phone" placeholder="Phone Number" style={inputStyle} />
            <input name="eventType" placeholder="Type of Event" style={inputStyle} />
            <input name="eventDate" placeholder="Preferred Date" style={inputStyle} />
            <input name="location" placeholder="Event Location" style={inputStyle} />
            <textarea
              name="details"
              placeholder="Tell Ana about your vision"
              required
              style={{ ...inputStyle, minHeight: "160px", gridColumn: "1 / -1", resize: "vertical" }}
            />
            <button
              type="submit"
              style={{
                gridColumn: "1 / -1",
                background: "linear-gradient(135deg, #d4749d 0%, #c06189 100%)",
                color: "white",
                padding: "16px 22px",
                border: "none",
                borderRadius: "16px",
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                boxShadow: "0 12px 24px rgba(160, 114, 135, 0.16)",
              }}
            >
              Send Inquiry
            </button>
          </form>
        </section>

        <footer
          style={{
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(214,150,173,0.18)",
            borderRadius: "28px",
            padding: "36px 28px",
            textAlign: "center",
            boxShadow: "0 18px 50px rgba(160, 114, 135, 0.08)",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "11px",
              color: "#b57d93",
              margin: "0 0 10px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            About Ana
          </p>
          <h3 style={{ color: "#c06189", fontSize: "32px", margin: "0 0 16px" }}>A Personal Promise</h3>
          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontFamily: "Arial, sans-serif",
              fontSize: "17px",
              lineHeight: 1.9,
              color: "#715c64",
            }}
          >
            My name is Ana Breen, and I have been doing events for over 20 years. My promise to you
            as an event planner & coordinator is that I am able to do events from A to Z. You name it,
            and I will create it! It is my mission to make your vision become a reality, and for you as
            the customer to come away with a memory that lasts a lifetime. Because today happened!
          </p>
        </footer>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid rgba(214,150,173,0.24)",
  background: "#fff9fb",
  fontSize: "15px",
  color: "#5e4a52",
  outline: "none",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box" as const,
};
