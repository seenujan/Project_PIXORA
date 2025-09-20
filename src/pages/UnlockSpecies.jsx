import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UnlockSpecies() {
  return (
    <div>
      <Header />
      <h1>New Species Unlocked!</h1>
      <p>Congratulations! You unlocked a new marine species for your ocean.</p>
      <a href="/virtualocean">Back to Virtual Ocean</a>
      <Footer />
    </div>
  );
}
