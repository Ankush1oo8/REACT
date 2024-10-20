import React from "react";
import ReactDOM from "react-dom";

//React elements

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react"
);

const Heading1 = () => <h1 id="heading"> hello there from jsx</h1>;

const JsxHeading = () => {
  return (
    <>
      <h1>Hello there</h1>
      <h2>I am Ankush</h2>
    </>
  );
};

let n = "Ankush";
//components
const HeadingComponents = () => {
  return (
    <div>
      <h1>hello {n}</h1>
      <Heading1 />
      <JsxHeading />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponents />);
