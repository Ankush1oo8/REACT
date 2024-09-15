import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Chidren Element or nested"),
    React.createElement("h2", {}, "I am Sibling to the first H1"),
  ]) 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);// it will be replaced by parent 
root.render(parent);
