import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Assignment/Header";

// React.createElemet => object => html(DOM).

// const heading = createElement("header", {}, "Namaste React sessions 3",[
//     createElement("h1", {key:1}, "h1 tag"),
//     createElement("h2", {key:2}, "h2 tag"),
//     createElement("h3", {key:3}, "h3 tag")
// ]);

// SO this form of writing code. make complex structure to debugge and write a large scale code.
// That's Why JXS is required?
// JSX is a HTML like syntax but it is not html inside javaScript.

const Heading2 = () =>(
    <h2>
    function Component 1
    </h2>
);
const xyz = 10;

// functional Component 

// If I have to use a component inside a component is called "Component Composition"

const HeadingComponent = function (){
    return (
        <div>
        {Heading2()} {/* Component Composition or Composing Component*/}
        {xyz}
        <h3>
            JSX is a HTML like syntax but it is not html inside javaScript.
        </h3>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);