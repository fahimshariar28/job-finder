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
    <div className="flex items-center justify-center h-auto">
      <PieChart width={500} height={400}>
        <Pie
          data={Assignment}
          dataKey="mark"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={Assignment}
          dataKey="mark"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
