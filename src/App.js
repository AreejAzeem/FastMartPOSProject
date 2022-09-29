import React from "react";
import "./App.css";
import HomePage from "./Pages/homePage/HomePage";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" exact element={<HomePage />} />
  
    </Routes>
    </Router>
  );
}

export default App;
