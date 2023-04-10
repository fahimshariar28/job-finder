import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-evenly w-9/12 mx-auto mt-5 items-center">
      <h2 className="text-5xl font-bold">Job Finder</h2>
      <div className="flex gap-4">
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
    </nav>
  );
};

export default Header;
