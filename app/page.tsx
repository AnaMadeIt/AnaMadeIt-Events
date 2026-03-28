export default function Home() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#fde7ef",
      color: "#444",
      minHeight: "100vh"
    }}>

      {/* Header */}
      <div style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "rgba(255,255,255,0.9)"
      }}>
        <h1 style={{ color: "#d63384", fontSize: "42px" }}>
          AnaMadeIt Events
        </h1>
        <p style={{ fontStyle: "italic", marginTop: "10px" }}>
          Treat Yourself! Because Today Happened
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
        margin: "20px"
      }}>
        {["weddings", "proposals", "birthdays", "floral", "custom"].map((item) => (
          <a key={item} href={`#${item}`} style={{
            background: "white",
            padding: "10px 16px",
            borderRadius: "20px",
            textDecoration: "none",
            color: "#d63384",
            fontWeight: "bold"
          }}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      {/* Sections */}
      {[
        {
          id: "weddings",
          title: "Wedding Packages",
          items: [
            "Basic Package - Ceremony setup & coordination",
            "Premium Package - Full planning + décor + florals"
          ]
        },
        {
          id: "proposals",
          title: "Proposal Packages",
          items: [
            "Romantic Setup - Candles, flowers, décor",
            "Luxury Proposal - Full custom experience"
          ]
        },
        {
          id: "birthdays",
          title: "Birthday Packages",
          items: [
            "Kids Party Package",
            "Luxury Birthday Experience"
          ]
        },
        {
          id: "floral",
          title: "Floral Arrangements",
          items: [
            "Custom Hydrangea Bouquets",
            "Event Floral Design"
          ]
        }
      ].map(section => (
        <div key={section.id} id={section.id} style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "30px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "16px"
        }}>
          <h2 style={{ color: "#d63384" }}>{section.title}</h2>
          {section.items.map((item, i) => (
            <div key={i} style={{
              background: "#fff0f5",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "10px"
            }}>
              {item}
            </div>
          ))}
        </div>
      ))}

      {/* Custom Event Form */}
      <div id="custom" style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "30px",
        background: "rgba(255,255,255,0.9)",
        borderRadius: "16px"
      }}>
        <h2 style={{ color: "#d63384" }}>Create Your Own Event</h2>

        <input placeholder="Your Name" style={inputStyle} />
        <input placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Describe your event" style={inputStyle} />

        <button style={{
          background: "#d63384",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          marginTop: "10px",
          cursor: "pointer"
        }}>
          Submit
        </button>
      </div>

      {/* About Section */}
      <div style={{
        textAlign: "center",
        padding: "40px",
        background: "rgba(255,255,255,0.9)"
      }}>
        <h3 style={{ color: "#d63384" }}>About Me</h3>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          My name is Ana Breen, and I have been doing events for over 20 years.
          My promise to you as an event planner & coordinator is that I am able
          to do events from A to Z. You name it, and I will create it! It is my
          mission to make your vision become a reality, and for you as the
          customer to come away with a memory that lasts a lifetime.
        </p>
      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};