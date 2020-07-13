import React from "react";
import trackr from "../images/Trackr.png";
import foodSearch from "../images/food-search.png";
import medications from "../images/medications.png";

function Trackr() {
  return (
    <div class="container">
      <div class="mb-5">
        <div class="row">
          <div class="col-lg-4">
            <h1 class="display-3">Yelpcipes</h1>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <p>
            <b>GitHub Link: </b>https://github.com/pakph/Trackr
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-12">
          <h4>How It Works</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <img id="healthTrackr" src={trackr} alt="Health Trackr" />
          <ul style={{ listStyleType: "none" }}>
            <li>
              This is the health tracker page where users can input their blood
              pressure and blood glucose levels
            </li>
            <li>
              When the user clicks submit, the chart displays the user's blood
              pressure and blood glucose levels along with a time stamp of when
              it was submitted
            </li>
          </ul>

          <img
            class="mt-5"
            id="foodSearch"
            src={foodSearch}
            alt="Food Search Page"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>On this page, users can search up food</li>
            <li>
              When the user clicks search, various food items related to the
              search query are displayed
            </li>
            <li>
              Each search result contains various health related information
              about the food such as the amount of calories, carbohydrates, etc
            </li>
          </ul>

          <img
            class="mt-5"
            id="medication"
            src={medications}
            alt="Medications Page"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>
              This is the medications page where users can add the medication
              that they are currently taking
            </li>
            <li>
              The medications page is still in progress, but some upcoming
              features for it would include displaying the amount of
              medications, inputting the number of pills, and adding a time
              taken
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trackr;
