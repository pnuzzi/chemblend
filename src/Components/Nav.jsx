import { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Home
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Services
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Industries Served
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Lab Support
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          About Us
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Contact Us
        </Link>
      </div>
      <div className={`panel ${isOpen ? "open" : "close"} flex flex-col`}>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Home
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Services
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Industries Served
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Lab Support
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          About Us
        </Link>
        <Link
          className="px-3 py-2 hover:bg-white hover:text-chemblend rounded"
          to=""
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
