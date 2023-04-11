import React from "react";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJob = () => {
  const appliedJob = JSON.parse(localStorage.getItem("appliedJob")) || [];

  return (
    <div className="w-9/12 mx-auto mt-5">
      <h2 className="text-3xl font-bold text-center">Applied Job</h2>
      {appliedJob.map((job) => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  );
};

export default AppliedJob;
