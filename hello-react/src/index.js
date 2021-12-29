// First Word Show in ReactJS...

// import React from 'react';
// import ReactDOM from 'react-dom';

// const nName = 'Junnu';

// ReactDOM.render(

// first way to declear...

//  <div>
//   <h1>Hy Junnu </h1>,
//     <p> Junaid</p>
//  </div>

// second way to declear...

// [
//   <h1>Hy Junnu </h1>,
//   <p> Junaid</p>
//   ],

// Theird way to declear...

// <React.Fragment>
// <h1>Hy Junnu </h1>
//  <p> Junaid</p>
// </React.Fragment>,

// Fourth way to declear...

// <>
// <h1>Hy Junnu </h1>
//  <p> Junaid</p>
//  <ol>
//    <li>
//      Jani
//    </li>
//  </ol>
// </>,
// document.getElementById('root')
// );

// JavaScript Expressions in JSX..

// With Date Time Example..

// import React from "react";
// import ReactDOM from "react-dom";

// const nName = "Junnu";

// const date = new Date().toDateString();
// const time = new Date().toLocaleTimeString();
// const img1 = 'https://picsum.photos/200/300';

// ReactDOM.render(
//   // JSX Attribute using img ETC..
//   <>
//     <h1 contentEditable="true"> My Nick Name is {nName} </h1>
//     <p>Today Current Date :  {date} </p>
//     <p>Today Current Time : {time} </p>
//     <img src= {img1} alt="randomImages" />
//   </>,
//   document.getElementById("root")
// );
// Style useing class != use className..

// using google font same mathod..

// React figment...

// inline style useing React object style key using camel case...

//Functional Component in React JS

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
<App />
, document.getElementById("root"));
