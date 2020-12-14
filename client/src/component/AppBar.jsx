import React from "react";
import "../style.css";

export default function AppBar() {
  return (
    <>
      <div className="home">
        <div className="primary-color">
          <i className="fa fa-thumb-tack fa-lg" aria-hidden="true"></i>
        </div>
        <div>
          <h1>To Do Lists</h1>
        </div>
      </div>
      <div className="menu primary-color">
        <i className="fa fa-bars menuIcon fa-lg" aria-hidden="true"></i>
      </div>
    </>
  );
}
