// components/Statistics.js
import React from "react";
import { FaUser} from "react-icons/fa";

const Statistics = () => {
  return (
    <div className="d-flex justify-content-between p-3">
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Total Clients</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>24</h2>
          <FaUser
            style={{ fontSize: "24px", margin: "10px", color: "black" }}
          />
        </div>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Processing</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>16</h2>
          <FaUser
            style={{ fontSize: "24px", margin: "10px", color: "yellow" }}
          />
        </div>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Pending</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>4</h2>
          <FaUser
            style={{ fontSize: "24px", margin: "10px", color: "red" }}
          />
        </div>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Completed</p>
        <div style={{display:"flex", justifyContent:"center"}}>
          <h2>4</h2>
          <FaUser style={{ fontSize: "24px", margin: "10px", color:"green" }} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
