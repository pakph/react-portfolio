import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="mr-5">
          <h1>Phil Pak</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  "nav" && props.currentPage === "About"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  "nav" && props.currentPage === "Portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  "nav" && props.currentPage === "Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
