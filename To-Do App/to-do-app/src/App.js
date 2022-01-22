import React from "react"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}


export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }