import React from "react";
import ReactDOM from "react-dom/client";

//React createElement=> Object =>when we render=>it becomes html elemnt
const heading = React.createElement("h1", { id: "heading" }, "Namaste react");

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //it will replace root div with given code

//its hard to write this code
//jsx=>created=>merge html and js=>not html in js=>html like syntax
//when giving atribute to jsx use camel casing

const jsxheading = <h1 className="heading">Hello jee</h1>;
//babel transpiles jsx
//babel is converting this code to html

// root.render(jsxheading);
//react component=>two types of components:
//class bassed component=>old way
//functional component=>new way =>mostly used


//functional component=>normal js function
const HeadingComponent=()=>{
    return(
        <div className="container">
            <h1>Hello from functional Component:Heading</h1>
        </div>
    )
}
//element in jsx
const element=(<h1>hello I am element</h1>);

//component composition
const TitleComponent=()=>{
    return(
        <div className="container">
            <HeadingComponent/> 
            {element}
            <h1>Hello from functional Component:Title</h1>
        </div>
    )
}

//we can use js in jsx using {}=> this brackets


//need to render functional component as element
root.render(<TitleComponent/>);