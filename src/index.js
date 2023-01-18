import React from "react";
import ReactDOM from "react-dom";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          PMBA 2025
          <br />
          Coming Soon!
        </h1>
        <Optin />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
