// components/Charts.js
import React from "react";

const Charts = () => {
  return (
    <div className="p-3">
      <div className="card p-3 mb-3">
        <h5>Client Overview</h5>
        <img
          src="/profile-user.png"
          alt="Client Overview"
          className="img-fluid"
          width={10}
        />
      </div>
      <div className="card p-3 mb-3">
        <h5>Commission Trajectory</h5>
        <img
          src="../public/profile-user.png"
          alt="Commission Trajectory"
          className="img-fluid"
        />
      </div>
      <div className="card p-3 mb-3">
        <h5>Closed Clients Trajectory</h5>
        <img
          src="../public/profile-user.png"
          alt="Closed Clients Trajectory"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Charts;
