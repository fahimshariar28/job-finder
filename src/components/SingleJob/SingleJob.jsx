import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
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
    <div className="border-solid border-2 border-slate-300 rounded-md p-2">
      <img className="mt-2" src={company_logo} alt="" />
      <h3 className="mt-2 text-xl font-semibold">{job_title}</h3>
      <h4 className="mt-2 text-lg">{company_name}</h4>
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
      <Link to={`/job/${id}`}>
        <button className="mt-2 bg-sky-500 p-2 rounded font-bold text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleJob;
