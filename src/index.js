import React from "react";
import ReactDOM from "react-dom";

const name = "Scott";
const element = (
  <h1>Hey there, my name is {name} and this is my first React app</h1>
);
const secondThing = <p>Hello World</p>;
ReactDOM.render(element, secondThing, document.getElementById("root"));
