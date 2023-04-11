import React from "react";
import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ job }) => {
  console.log(job);
  const {
    id,
    company_logo,
    company_name,
    job_title,
    fulltime_or_parttime,
    remote_or_onsite,
    salary,
    location,
  } = job;
  return (
    <div className="mt-10 md:flex justify-between items-center border-solid border-2 border-slate-300 rounded-md p-2">
      <img src={company_logo} alt="" />
      <div>
        <h3 className="text-2xl">{job_title}</h3>
        <h4 className="text-xl">{company_name}</h4>
        <div className="mt-2 flex align-center gap-2">
          <p className="border-solid border-2 border-sky-500 rounded font-semibold text-sky-500 p-1">
            {remote_or_onsite}
          </p>
          <p className="border-solid border-2 border-sky-500 rounded font-semibold text-sky-500 p-1">
            {fulltime_or_parttime}
          </p>
        </div>
        <div className="mt-2 flex align-center gap-2">
          <p>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location}
          </p>
          <p>
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> {salary}
          </p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className="mt-2 bg-sky-500 p-2 rounded font-bold text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleAppliedJob;
