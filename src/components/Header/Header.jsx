import { faEquals, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:flex justify-between w-9/12 mx-auto mt-5 items-center">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-bold">Job Finder</h2>
        <div onClick={() => setOpen(!open)} className="text-sky-500 md:hidden">
          <span>
            {open == false ? (
              <FontAwesomeIcon icon={faEquals}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            )}
          </span>
        </div>
      </div>
      <div
        className={`bg-slate-500 md:bg-white p-1 md:flex justify-between gap-3 items-center absolute md:static duration-1000 rounded-md ${
          open ? "top-18 right-6" : "-top-56 right-6"
        } z-10`}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/">Home</Link>
          <Link to="/statistic">Statistic</Link>
          <Link to="/applied-job">Applied Job</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <Link to="/apply">
          <button className="bg-blue-300 p-3 rounded-lg text-white font-semibold">
            Start Applying
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
