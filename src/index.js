import React from "react";
import ReactDOM from "react-dom";
import Option1 from "./components/Option1/Option1";
import Option2 from "./components/Option2/Option2";

const container = document.createElement("div");
document.body.appendChild(container);

global.ArticlePlea = class ArticlePlea {
  constructor(config) {
    this.config = { ...config };
  }

  init(type) {
    type = this.config.type.toLowerCase();

    if (type === "option1") {
      ReactDOM.render(<Option1 />, container);
    } else if (type === "option2") {
      ReactDOM.render(<Option2 />, container);
    } else {
      console.log("Error! Unknown config type.");
      return;
    }
  }
};

// ReactDOM.render(<Option2 />, document.getElementById("root"));
