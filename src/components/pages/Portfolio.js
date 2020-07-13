import React from "react";
import yelpcipe2 from "../images/yelpcipe2.png";
import trackr from "../images/Trackr.png";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <div class="mb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <h1 class="display-3">Portfolio</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={yelpcipe2} class="card-img-top" alt="Yelpcipes" />
              <div class="card-body">
                <h5 class="card-title">Yelpcipes</h5>
                <p class="card-text">
                  Have you ever wanted to eat your favorite meal at your
                  favorite restaurant, but it was closed? Well, look no further.
                  Yelpcipes is here to help you!
                </p>
                <Link to="/yelpcipes" className="btn btn-primary">
                  Yelpcipes
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <img src={trackr} class="card-img-top" alt="Project 2" />
              <div class="card-body">
                <h5 class="card-title">Trackr</h5>
                <p class="card-text">
                  Trackr is a diabetes tracker that helps users keep records of
                  various health related information.
                </p>
                <Link to="/trackr" class="btn btn-primary">
                  View Trackr
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Homework Header */}
      <div class="container mt-5">
        <div class="row">
          <div class="mb-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-4">
                  <h1 class="display-3">Homework</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row">
          {/* Homework 1 Card */}
          <div class="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Note Taker</h5>
                <p class="card-text">
                  This is a note taker app that allows users to write, save, and
                  delete notes.
                </p>
                <a href="https://github.com/pakph/Note-Taker" class="card-link">
                  View Repo
                </a>
              </div>
            </div>
          </div>

          {/* Homework 2 Card */}
          <div class="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Employee Tracker</h5>
                <p class="card-text">
                  This is a small employee tracker app that utilizes node,
                  inquirer, and MySQL to add/edit employees and departments.
                  This app also helps keep track of the employee's salaries and
                  more.
                </p>
                <a
                  href="https://github.com/pakph/Employee-Tracker"
                  class="card-link"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>

          {/* Homework 3 Card */}
          <div class="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Burger Tracker</h5>
                <p class="card-text">
                  Ever wanted to know if you had a certain burger before? With
                  this burger tracker, you can keep track of which burgers you
                  have devoured.
                </p>
                <a href="https://github.com/pakph/burger" class="card-link">
                  View Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Homework 4 Card */}
        <div class="mt-5 mb-4">
          <div class="row">
            <div class="col-lg-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Template Engine</h5>
                  <p class="card-text">
                    With this README template engine, anyone can generate a
                    simple README for their repo.
                  </p>
                  <a
                    href="https://github.com/pakph/Template-Engine"
                    class="card-link"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
