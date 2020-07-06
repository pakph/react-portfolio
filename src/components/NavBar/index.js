import React from "react";

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
              <a
                href="#about"
                onClick={() => props.handlePageChange("About")}
                className={
                  props.currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => props.handlePageChange("Portfolio")}
                className={
                  props.currentPage === "Portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => props.handlePageChange("Contact")}
                className={
                  props.currentPage === "Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
