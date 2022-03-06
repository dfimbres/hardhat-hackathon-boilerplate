import React from "react";
import ReactDOM from "react-dom";
import { Dapp } from "./components/Dapp";
import "bootstrap/dist/css/bootstrap.css";
import CreateEvent from './components/ui components/createEvent.js'

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <React.StrictMode>
    <Dapp/>
  </React.StrictMode>,
  document.getElementById("root")
);
