import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
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
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
