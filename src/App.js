import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header className=" bg-chemblend p-5 flex items-center">
        <Link>
          <img
            className=" w-40 lg:w-80 pr-3"
            src="img/logo.gif"
            alt="Chemblend Logo"
          />
        </Link>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
