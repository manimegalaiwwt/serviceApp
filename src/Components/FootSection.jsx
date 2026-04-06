import React from "react";

export default function FootSection() {
  return (
    <div
      className="footer"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "2px solid #ccc",
        paddingTop: "20px",
      }}
    >
      <p>
        <strong>DECLARATION:</strong>All product and company names are
        trademarks™ or registered® trademarks of their respective holders.
      </p>
      <p>
        <strong>Disclaimer:</strong> We are an independent service provider and
        not authorized associate partners from any brands.
      </p>

      <p className="copyright">
        © Copyright 2024 UltraClean SERVICES. All Rights Reserved.
      </p>
    </div>
  );
}
