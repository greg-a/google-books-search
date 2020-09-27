import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron jumbotron-fluid"
    >
      <div className="container jumbotron-container navbar navbar-expand-sm navbar-dark bg-primary flex-column">
        <h1>(React) Google Books Search</h1>
        {children}
      </div>
    </div>
  );
}

export default Jumbotron;
