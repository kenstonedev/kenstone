// components/Statistics.js
import React, { useState, useEffect } from "react";
import { FaUser} from "react-icons/fa";

const Statistics = ({clients}) => {

  const [stats, setStats] = useState({
    total: 0,
    processing: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    const fetchClients = () => {
      try {
        const statistics = {
          total: clients.length,
          processing: clients.filter(client => client.status === "processing").length,
          pending: clients.filter(client => client.status === "pending").length,
          completed: clients.filter(client => client.status === "completed").length,
        };

        setStats(statistics);
      } catch (error) {
        console.error("Error fetching clients data: ", error);
      }
    };

    fetchClients();
  }, [clients]);


  return (
    <div className="d-flex justify-content-between p-3">
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Total Clients</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>{stats.total}</h2>
          <FaUser
            style={{ fontSize: "24px", margin: "10px", color: "black" }}
          />
        </div>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Processing</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>{stats.processing}</h2>
          <FaUser
            style={{ fontSize: "24px", margin: "10px", color: "yellow" }}
          />
        </div>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Pending</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>{stats.pending}</h2>
          <FaUser
            style={{ fontSize: "24px", margin: "10px", color: "red" }}
          />
        </div>
      </div>
      <div className="card text-center p-3 m-2" style={{ width: "150px" }}>
        <p>Completed</p>
        <div style={{display:"flex", justifyContent:"center"}}>
          <h2>{stats.completed}</h2>
          <FaUser style={{ fontSize: "24px", margin: "10px", color:"green" }} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
