import React from "react";
import ReactDOM from "react-dom/client";

//React createElement=> Object =>when we render=>it becomes html elemnt
const heading = React.createElement("h1", { id: "heading" }, "Namaste react");

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //it will replace root div with given code

//its hard to write this code
//jsx=>created=>merge html and js=>not html in js=>html like syntax
const jsxheading = <h1 id="heading">Hello jee</h1>;

root.render(jsxheading);
