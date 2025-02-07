// //import logo from './logo.svg';
// // import './App.css';

// // function App() {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// //   let username="sathvika";
// //   return(
// //     <div>
// //       <h1>{username}</h1>
// //     </div>
// //   )
// // }

// // export default App;
// //!CBC
// // import React from "react";
// // class App extends React.Component{
// //   render(){
// //     return(
// //       <h1> Class based component</h1>
// //     )
// //   }
// // }
// // export default App;
// //! component composition
// //!rcc
// //!rafce
// // import React from 'react'
// // import Navbar from './components/Navbar'
// // import Main from './components/Main'
// // import Sidebar1 from './components/Sidebar1'
// // import Sidebar2 from './components/Sidebar2'
// // import Footer from './components/Footer'
// // const App = () => {
// //   return (
// //     <div className='app'>
// //       <Navbar/>
// //       <Main/>
// //       <div className='sidebar'>
// //         <Sidebar1/>
// //         <Sidebar2/>

// //       </div>
// //       <Footer/>
// //     </div>
// //   )
// // }

// // export default App
// //!props
// import React, {Component} from 'react'

// import FBCPropEx from './propsex/FBCPropEx'

// export default class App extends Component{
//   render(){
//     return(
//     <div>
//       {/* { <CBCPropEx
//       username="sathvika"
//       age={21}
//       hobbies={["playing","dancing"]}
//       address={{city:"warangal",area:"mangapet"}}
//       sendFun={function(){alert("hi i am sathvika")}}
//       /> } */}
//       <FBCPropEx
//       username="ravi"
//       isMarried={true}
//       hobbies={["chatting","reading","Eating","Sleeping"]}
//       />
//     </div>
//     )
//   }
// }
import FunctionalComponent from "./components/FunctionalComponent";
function App(){
  return(
    <div className="App">
      <FunctionalComponent clgName ='MRU' />
    </div>
  )
}

export default App;