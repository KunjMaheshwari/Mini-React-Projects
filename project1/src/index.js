import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var currTime = new Date().getHours();
var greetings = '';

const cssStyle = {

};

if (currTime >= 1 && currTime < 12) {
  greetings = "Good Morning";
  cssStyle.color = 'green';
} else if (currTime >= 12 && currTime < 19) {
  greetings = "Good Afternoon";
  cssStyle.color = 'yellow';
} else {
  greetings = "Good Night";
  cssStyle.color = 'Orange';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
    </div>

  </>, document.getElementById("root")
)