import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
ReactDOM.render(<h1>Hello name!</h1>, document.getElementById("root"));

// this how you inject javaScript into HTML code
ReactDOM.render(<h1>Hello {name}}</h1>, document.getElementById("root"));
