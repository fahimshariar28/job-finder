import React from "react";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJob = () => {
  const appliedJob = JSON.parse(localStorage.getItem("appliedJob")) || [];
  const filter = () => {
    const x = document.getElementById("filterSelect").value;
    if (x === "partTime") {
      const filteredJob = appliedJob.filter(
        (e) => e.fulltime_or_parttime == "Part-Time"
      );
      return filteredJob;
    } else if (x === "fullTime") {
      const filteredJob = appliedJob.filter(
        (e) => e.fulltime_or_parttime == "Full-Time"
      );
      return filteredJob;
    }
  };
  return (
    <div className="w-9/12 mx-auto mt-5">
      <h2 className="text-3xl font-bold text-center">Applied Job</h2>
      <select id="filterSelect" onChange={filter()}>
        <option value="partTime">Filter by Part-Time Job</option>
        <option value="fullTime">Filter by Full-Time Job</option>
      </select>
      {appliedJob.map((job) => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  );
};

export default AppliedJob;
