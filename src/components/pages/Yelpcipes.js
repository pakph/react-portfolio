import React from "react";
import yelpcipessearch from "../images/yelpcipessearch.png";
import ingredientssearch from "../images/ingredientssearch.png";

function Yelpcipes() {
  return (
    <div className="container">
      <div className="mb-5">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="display-3">Yelpcipes</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <p>
            <b>GitHub Link: </b>https://github.com/tchan958/Yelpcipes
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-12">
          <h4>How It Works</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <img
            id="yelpcipessearch"
            src={yelpcipessearch}
            alt="Yelpcipes Search"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>First type in the desired food and the location</li>
            <li>
              Then click the "Search" button and all the restaurants that make
              that type of food will be dynamically generated on the page
            </li>
            <li>
              The favorites feature is an upcoming feature where users can click
              on the "Heart" icon located at the top right of each result
            </li>
            <li>
              By doing so, the heart will become a solid red heart, indicating
              that it was favorited
            </li>
            <li>
              After you find your desired food, navigate to the "Recipes Search"
              page to look for recipes
            </li>
          </ul>

          <img
            id="ingredientssearch"
            src={ingredientssearch}
            alt="Recipes Search"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>
              On the recipes search page, users can search up any recipes for
              the food that they are craving
            </li>
            <li>Just enter in the desired food and click search</li>
            <li>
              Different types of recipes will be dynamically generated and each
              result will list the ingredients that he/she needs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Yelpcipes;
