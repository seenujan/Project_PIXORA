import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button style={{ padding: 10, margin: 5, background: "#0288d1", color: "white", border: "none", borderRadius: 5 }} onClick={onClick}>
      {text}
    </button>
  );
}
