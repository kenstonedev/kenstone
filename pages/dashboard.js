// pages/dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";
import ClientList from "../components/ClientList";
import Statistics from "../components/Statistics";
import Charts from "../components/Charts";
import ClientsTable from "../components/ClientsTable";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <header className="d-flex justify-content-between align-items-center p-3 bg-light">
          <h1>Dashboard</h1>
          <div>
            <button className="btn btn-primary mr-3">Add New</button>
            <img
              src="/path-to-user-profile.png"
              alt="User"
              className="rounded-circle"
              width="50"
              height="50"
            />
          </div>
        </header>
        <div className="p-3">
          <div className="row">
            <div className="col-md-3">
              <ClientList />
            </div>
            <div className="col-md-9">
              <Statistics />
              <Charts />
              <ClientsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
