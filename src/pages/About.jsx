import React from "react";
import ContactBox from "../Components/ContactBox";

export default function About() {
  return (
    <div className="main">
      <div className="left">
        <div
          className="card"
          style={{
            backgroundColor: "#f5f5f5",
            padding: "40px",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            We Provide Best Repair Services For Your Home Appliances
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              marginBottom: "15px",
              lineHeight: "1.6",
            }}
          >
            UltraClean Services is one of the premier repair service centres
            operating across major cities in Tamil Nadu including Chennai,
            Coimbatore, Tripur, Madurai, Trichy, Salem, Theni, Dindigul, and
            Puducheri. We offer comprehensive home appliance repair and
            maintenance services with 24x7 customer care support.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#777",
              marginBottom: "25px",
              lineHeight: "1.6",
            }}
          >
            We have trained technicians with extensive electronics knowledge and
            experience. Our service area extends up to 100 KM radius from each
            location. Our team consists of highly qualified professionals with
            3+ years of industry experience, equipped to handle repairs of any
            complexity.
          </p>
          <button
            style={{
              backgroundColor: "#e84c7d",
              color: "white",
              padding: "12px 30px",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "30px",
            }}
          >
            CONTACT SERVICE
          </button>
          <div
            style={{
              marginTop: "30px",
              borderTop: "2px solid #ddd",
              paddingTop: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              For Direct Visit, Estimate & Repair Services
            </h3>
            <p
              style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}
            >
              If you are searching for "Home appliances service near me", we are
              just one call away!
            </p>
            <p
              style={{ fontSize: "15px", fontWeight: "bold", color: "#e84c7d" }}
            >
              WhatsApp/Call - 9342232571 / 9344600166
            </p>
          </div>
        </div>
      </div>
      <ContactBox />
    </div>
  );
}
