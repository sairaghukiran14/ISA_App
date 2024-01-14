import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Resultspage from "./Pages/Resultspage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/results" exact element={<Resultspage />} />
      </Routes>
    </>
  );
}

export default App;
