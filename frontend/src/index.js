import React from "react";
import { render } from "react-dom"
import { Dapp } from "./components/Dapp";
import SelectRecipients from './components/ui components/selectRecipients.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyEvents from './components/ui components/myEvents.js'
import "bootstrap/dist/css/bootstrap.css";
import CreateEvent from './components/ui components/createEvent.js'

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<Dapp />} />
      <Route path="create-event" element={<CreateEvent />} />
      <Route path="select-recipients" element={<SelectRecipients />} />
      <Route path="my-events" element ={<MyEvents />} />
    </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
