import React from "react";

import Normal from "./Components/Normal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Debounce from "./Components/Debounce";
import Throttle from "./Components/Throttle";

function App() {
  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
  })
  return (
    <React.Fragment>
      <BrowserRouter basename="/Search-bars">
        <Routes>
          <Route exact path="/" element={<Normal />} />
          <Route exact path="/Debounce" element={<Debounce />} />
          <Route exact path="/Throttle" element={<Throttle />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
