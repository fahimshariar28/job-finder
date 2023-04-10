import React, { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className=" w-9/12 mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center">Job Category List</h2>
      <p className="text-center mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-3 gap-5 items-center mt-5">
        {data.map((singleData) => (
          <SingleCategory
            key={singleData.id}
            singleData={singleData}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
