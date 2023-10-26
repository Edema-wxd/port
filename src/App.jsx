import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Land from "./components/landing/Land";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Details from "./components/details/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Header />
          <Route exact path="/" element={<Land />}></Route>
          <Route path="details/:portId" element={<Details/>} />
          <Footer />
        </Routes>
      </Router>
    </>
  );
}

export default App;
