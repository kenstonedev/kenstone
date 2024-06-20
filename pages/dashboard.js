// pages/dashboard.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ClientList from "../components/ClientList";
import Statistics from "../components/Statistics";
import Charts from "../components/Charts";
import ClientsTable from "../components/ClientsTable";


const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar/>
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
