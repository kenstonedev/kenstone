// components/Charts.js
import React from "react";
import ClientsTable from "../components/ClientsTable";
import SimpleLineChart from "./SimpleLineChart";

const Charts = ({clients}) => {
  return (
    <div className="p-3">
      <div className="d-flex">
        <div className="card text-center m-2 p-3">
          <h5>Client Overview</h5>
          <div
            className="pie-chart"
            style={{
              width: "200px",
              height: "200px",
              background:
                "conic-gradient( red 50%, #ffc107 50% 75%, #28a745 75%)",
              borderRadius: "50%",
            }}
          ></div>
          <div className="d-flex justify-content-center mt-3">
            <span className="badge bg-warning mx-1">Processing</span>
            <span className="badge bg-danger mx-1">Pending</span>
            <span className="badge bg-success mx-1">Completed</span>
          </div>
        </div>
        <div className="card text-center m-2 p-3">
          <h5>Clients</h5>
          <ClientsTable clients={clients}/>
        </div>
      </div>
      <div className="d-flex">
        <div className="card p-3 m-3">
          <h5>Commission Trajectory</h5>
          <SimpleLineChart />
        </div>
        <div className="card p-3 m-3">
          <h5>Closed Clients Trajectory</h5>
          <SimpleLineChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
