import React from "react";

function About() {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-4">About Me</h1>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                    <img src="https://via.placeholder.com/200" alt="Phil Pak" />
                  </div>
                  <div className="col-lg-9">
                    <p className="lead">
                      Hello! I am an aspiring Computer Programmer. Currently, I
                      am going through Coding Bootcamp in order to achieve this
                      goal. From this bootcamp, I wish to learn all sorts of
                      skills including those not limited to coding.
                    </p>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
