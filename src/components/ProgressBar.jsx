import React from "react";

export default function ProgressBar({ percent }) {
  return (
    <div style={{ background: "#ddd", borderRadius: 5, width: "100%", margin: 10 }}>
      <div style={{ width: `${percent}%`, background: "#0288d1", padding: 5, borderRadius: 5, color: "white" }}>
        {percent}%
      </div>
    </div>
  );
}
