// components/Statistics.js
import React from "react";

const Statistics = () => {
  return (
    <div className="d-flex justify-content-between p-3">
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Total Clients</p>
        <h2>24</h2>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Processing</p>
        <h2>16</h2>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Pending</p>
        <h2>4</h2>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Completed</p>
        <h2>4</h2>
      </div>
    </div>
  );
};

export default Statistics;
