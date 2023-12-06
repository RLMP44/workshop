import '../assets/stylesheets/application.scss';
import { createRoot } from "react-dom/client";
// import react to be able to write HTML within JavaScript file
import React, { Component } from "react";
import App from "./components/App";

// Select an element
const container = document.querySelector("#root");
// Use imported React method createRoot with selected element
const root = createRoot(container);
// render method as a self-closing HTML tag
// react arguments are also called props (properties)
root.render(<App />);

// react parameters are called props
// create a method with the desired HTML inside
// const Hello = ({ name, job }) => {
//   // const name = props.name;
//   // const job = props.job;
//   // rename variables in one line with the following
//   // const { name, job } = props;
//   // simplify further by adding directly into parameters
//   return (
//     <h1>
//       Hi, I'm {name}. I'm a {job}.
//     </h1>
//   );
// };

// 1. render from react on html
// 2. how to create a react Component
// 3. customize a component with props
// 4. breakdown our app into nested components (in different files)
// 5. how to refactor with props and iterations
// 6. how to handle event with states (React hook states = using useState())
