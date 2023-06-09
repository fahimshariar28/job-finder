import React, { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const [seeAll, setSeeAll] = useState(false);
  return (
    <div className=" w-9/12 mx-auto mt-10">
      <h2 className="text-5xl font-bold text-center">Featured Jobs</h2>
      <p className="mt-3 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        {seeAll
          ? jobs.map((job) => <SingleJob key={job.id} job={job}></SingleJob>)
          : jobs
              .slice(0, 4)
              .map((job) => <SingleJob key={job.id} job={job}></SingleJob>)}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className={`mt-2 bg-sky-500 px-5 py-2 rounded font-bold text-white ${
            seeAll ? "hidden" : "block"
          }`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Job;
