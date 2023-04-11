import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Statistics = () => {
  const Assignment = [
    { assignment: 1, name: "Assignment 1", mark: 57 },
    { assignment: 2, name: "Assignment 2", mark: 59 },
    { assignment: 3, name: "Assignment 3", mark: 60 },
    { assignment: 4, name: "Assignment 4", mark: 59 },
    { assignment: 5, name: "Assignment 5", mark: 60 },
    { assignment: 6, name: "Assignment 6", mark: 60 },
    { assignment: 7, name: "Assignment 7", mark: 60 },
    { assignment: 8, name: "Assignment 8", mark: 60 },
  ];

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-3xl font-bold text-center">Statistics</h2>
      {/* Make a Table With the assignment marks */}
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th className="border border-black">Assignment</th>
            <th className="border border-black">Name</th>
            <th className="border border-black">Mark</th>
          </tr>
        </thead>
        <tbody>
          {Assignment.map((e) => (
            <tr key={e.assignment}>
              <td className="border border-black">{e.assignment}</td>
              <td className="border border-black">{e.name}</td>
              <td className="border border-black">{e.mark}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Make a Pie Chart With the assignment marks */}
      <div className="flex justify-center">
        <PieChart width={300} height={400}>
          <Pie
            data={Assignment}
            dataKey="mark"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
