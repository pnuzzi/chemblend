import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className=" text-white">
      <button
        onClick={() => setOpen(!isOpen)}
        className={` md:hidden hamburger-button ${isOpen ? "open" : "close"}`}
      />
      <div className="hidden md:flex">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/Services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/IndustriesServed"
        >
          Industries Served
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/LabSupport"
        >
          Lab Support
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/AboutUs"
        >
          About Us
        </NavLink>
        <NavLink
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to="/ContactUs"
        >
          Contact Us
        </NavLink>
      </div>
      <div className={`panel ${isOpen ? "open" : "close"} flex flex-col`}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/Services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/IndustriesServed"
        >
          Industries Served
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/LabSupport"
        >
          Lab Support
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/AboutUs"
        >
          About Us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2 bg-white text-chemblend rounded"
              : "px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          }
          to="/ContactUs"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
