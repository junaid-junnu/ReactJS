
// First Word Show in ReactJS...

// import React from 'react';
// import ReactDOM from 'react-dom';

// const nName = 'Junnu';

// ReactDOM.render(

// Multi Tag Use..

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

// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App";

// ReactDom.render(
// <App />
// , document.getElementById("root"));

//    30-12-2021 Learn.

// 1- ES6 Modules Import Export in React JS..

// 2- Props in React Js..

// 3- Arrays in React JS..

// 4- Array Map & Fat Arrow function in React Js..

// 5- React Developer Tools | Debugging & Error Handling in React JS..

// 6- If Else Statement in React JS
// | Conditional Rendering in React JS..

// 7- Ternary Operator in React JS..

// 8- Hooks in React JS in Hindi 
// | useState in Hook in React JS..

// import React from "react";
// import ReactDom from "react-dom";
// import App from './App'

// ReactDom.render( <App /> , document.getElementById('root'));

// 9- Handling Events in ReactJS..

// 10- React Controlled Vs Uncontrolled Component..

//  App.jsx

// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       <Para />
//     </>
//   );
// }

// export default App;

// First Hook Example..

// import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const App = () => {

// const [count, setCount] = useState(0);

// const IncNum = () =>{
//   setCount( count + 1)
// }
// const DecNum = () => {
//     if(count > 0){
//     setCount( count - 1)
//     }else{
//      setCount(0)
//     }
// }
// return (
//    <>
//    <h1> {count} </h1>
//    <button onClick={IncNum}> + </button>
//    <button onClick={DecNum}> - </button>

//   </>
// )
// }; 

// export default App;

// App.css

// body{
//     box-sizing: border-box;
//     background-color: lightblue;
//     font-family: Arial, Helvetica, sans-serif;
// }
// .main{
//     width: 300px;
//     height: 500px;
//     background-color: #fff;
//     text-align: center;
//     border-radius: 10px;
// }

// .main h1{
//     background-color: mediumslateblue;
//     color: #fff;
// }
// .main input {
//     padding: 10px;
//     width: 65%;
//     margin: 7px;
//     border: none;
//     outline: none;
//     border-bottom: 2px solid gray;
//     font-family: Arial, Helvetica, sans-serif;
// }
// .main button{
//     padding: 10px;
//     border: none;
//     background-color: mediumslateblue;
//     color: #fff;
//     border-radius: 50%;
// }

// App.jsx

// import React from 'react';

// const App = () => {
  
//   return (
//     <>
//       <div className='main'>
//         <h1> ToDo </h1>
//       <div className='inputFild'>
//         <input type='text' placeholder='Add to do' />
//         <button> + </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App;