import React from "react";
import { useParams, Link } from "react-router-dom";
import { species } from "../mockData/species";
import Header from "../components/Header";


export default function SpeciesInfo() {
  const { id } = useParams();
  const s = species.find(sp => sp.id === Number(id)); 

  return (
    <div>
      <Header />
      <h1>{s.name}</h1>
      <p>{s.description}</p>
      <Link to="/virtualocean">Back to Virtual Ocean</Link>
  
    </div>
  );
}
