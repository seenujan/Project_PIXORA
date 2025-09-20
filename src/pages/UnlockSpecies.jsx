import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

export default function UnlockSpecies() {
  return (
    <div>
      <Header />
      <h1>New Species Unlocked!</h1>
      <p>Congratulations! You unlocked a new marine species for your ocean.</p>

      {/* Back to Virtual Ocean link changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <a href="/virtualocean" style={{ textDecoration: "none" }}>
          <Button text="Back to Virtual Ocean" />
        </a>
      </div>
    </div>
  );
}
