import React from "react";
import { useParams, Link } from "react-router-dom";
import { species } from "../mockData/species";
import Header from "../components/Header";
import Button from "../components/Button";

export default function SpeciesInfo() {
  const { id } = useParams();
  const s = species.find((sp) => sp.id === Number(id));

  return (
    <div>
      <Header />
      <h1>{s.name}</h1>
      <p>{s.description}</p>

      {/* Back to Virtual Ocean link changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/virtualocean" style={{ textDecoration: "none" }}>
          <Button text="Back to Virtual Ocean" />
        </Link>
      </div>
    </div>
  );
}
