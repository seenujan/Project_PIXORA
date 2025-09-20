import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Onboarding() {
  const [interests, setInterests] = useState({
    plastic: false,
    marineLife: false,
    beachCleanups: false,
  });

  const toggleInterest = (key) => {
    setInterests({ ...interests, [key]: !interests[key] });
  };

  return (
    <div style={{ padding: 20 }}>
      <Header />
      <h1>Onboarding</h1>
      <p>Select your interests to personalize your experience:</p>
      <div>
        <label>
          <input type="checkbox" checked={interests.plastic} onChange={() => toggleInterest("plastic")} />
          Plastic Reduction
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={interests.marineLife} onChange={() => toggleInterest("marineLife")} />
          Marine Life
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={interests.beachCleanups} onChange={() => toggleInterest("beachCleanups")} />
          Beach Cleanups
        </label>
      </div>
      <br />
      <Link to="/home">
        <Button text="Finish Onboarding" />
      </Link>
      
    </div>
  );
}
