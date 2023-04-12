import React from "react";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJob = () => {
  const appliedJob = JSON.parse(localStorage.getItem("appliedJob")) || [];
  return (
    <div className="w-9/12 mx-auto mt-5">
      <h2 className="text-3xl font-bold text-center">Applied Job</h2>
      <div className="flex justify-end">
        <select className="shadow-md rounded-md" id="filterSelect">
          <option value="partTime">Filter by Part-Time Job</option>
          <option value="fullTime">Filter by Full-Time Job</option>
        </select>
      </div>
      {appliedJob.map((job) => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  );
};

export default AppliedJob;
