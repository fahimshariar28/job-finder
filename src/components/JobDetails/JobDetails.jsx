import {
  faCalendar,
  faDollarSign,
  faLocationDot,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const job = useLoaderData();
  let { id } = useParams();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobs = job.find((e) => e.id == id);
    setJobs(jobs);
  }, []);
  const {
    job_description,
    job_responsibility,
    education_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    location,
  } = jobs;
  const btnApply = (id) => {
    addToDb(id);
  };
  return (
    <div className=" w-9/12 mx-auto mt-10 grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <p className="mt-5">
          <span className="font-bold">Job Description:</span> {job_description}
        </p>
        <p className="mt-5">
          <span className="font-bold">Job Responsibilities:</span>{" "}
          {job_responsibility}
        </p>
        <p className="mt-5">
          <span className="font-bold">Educational Requirements:</span>{" "}
          {education_requirements}
        </p>
        <p className="mt-5">
          <span className="font-bold">Experience:</span> {experiences}
        </p>
      </div>
      <div>
        <div className="bg-slate-200 rounded p-5">
          <p className=" font-bold">Job Details</p>
          <hr className="w-9/12" />
          <p>
            <span className="text-sky-500">
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
            </span>{" "}
            {salary}
          </p>
          <p>
            <span className="text-sky-500">
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            </span>{" "}
            {job_title}
          </p>
          <p className="mt-5 font-bold">Contact Information</p>
          <hr className="w-9/12" />
          {/* <p>
            <span className="text-sky-500">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            </span>
            {" Phone: "}
            {contact_information.phone}
          </p>
          <p>
            <span className="text-sky-500">
              <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
            </span>
            {" Email: "}
            {contact_information.email}
          </p> */}
          <p>
            <span className="text-sky-500">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            </span>
            {" Address: "}
            {location}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="w-full text-center font-bold text-white mt-3 bg-sky-500 px-5 py-3 rounded-lg"
            onClick={() => btnApply(id)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
