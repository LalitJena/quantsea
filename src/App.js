import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from "./Pages/Services";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
