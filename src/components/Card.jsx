import React from "react";

export default function Card({ title, content, children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10, borderRadius: 5 }}>
      <h3>{title}</h3>
      <p>{content}</p>
      {children}
    </div>
  );
}
