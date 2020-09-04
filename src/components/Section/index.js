import React from "react";
import "./style.css";

export default function Section({ children, bkgColor }) {
  return (
    <div className="sectionArea" style={{ backgroundColor: bkgColor }}>
      {children}
    </div>
  );
}
