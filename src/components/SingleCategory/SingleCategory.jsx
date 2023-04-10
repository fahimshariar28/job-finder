import React from "react";

const SingleCategory = ({ singleData }) => {
  const { categoryLogoImage, categoryName, availableJobs } = singleData;
  return (
    <div>
      <div className=" max-w-sm p-6 text-black bg-indigo-50 border border-gray-200 rounded-lg shadow-md ">
        <img src={categoryLogoImage} alt="" />
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">
          {categoryName}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {availableJobs} Jobs Available
        </p>
      </div>
    </div>
  );
};

export default SingleCategory;
