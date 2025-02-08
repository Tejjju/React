// import React from 'react'
// import './Styles.css'

// function FunctionalComponent(props) {
//     console.log(props);
//     let applyStyle = props.apply ? 'heading':' '
//     let inlineStyle = {
//         color:'aqua',
//         backgroundColor: 'red',
//         fontSize : '50px'
//     }

//     return (
//         <div>
//             <h1 class={`${applyStyle} font-style`}>Welcome to my react class {props.clgName}</h1>
//             {props.children}
//             <h2 style={inlineStyle}>Good Afternoon</h2>
//         </div>
//     )
// }

// export default FunctionalComponent

// FunctionalComponent.js
import { useState } from "react";

export default function FunctionalComponent() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleToggle}
      className={`flex flex-col items-center p-4 h-screen transition-colors duration-300 cursor-pointer ${
        isActive ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <p
        className={`text-xl font-bold transition-colors duration-300 ${
          isActive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isActive ? "Click to Turn Red" : "Click to Turn Green"}
      </p>
    </div>
  );
}
