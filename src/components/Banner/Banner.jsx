import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center gap-3 w-9/12 mx-auto mt-5">
      <div>
        <h2 className="text-5xl font-bold">
          One Step Closer To Your{" "}
          <span className="text-blue-300">Dream Job</span>
        </h2>
        <p className="mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-blue-300 p-3 rounded-lg text-white font-semibold mt-3">
          Get Started
        </button>
      </div>
      <div>
        <img src="../../../public/pictures/hero-section-pic.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
