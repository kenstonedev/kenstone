// components/ClientsTable.js
import React from "react";

const ClientsTable = () => {
  const clients = [
    {
      name: "Mr. Manish Kamal",
      bank: "HDFC",
      score: 540,
      status: "Closed",
      commission: "8%",
    },
    // Add more clients as needed
  ];

  return (
    <div className="p-3">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Bank</th>
            <th>CIBIL Score</th>
            <th>Status</th>
            <th>Commission</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.bank}</td>
              <td>{client.score}</td>
              <td>{client.status}</td>
              <td>{client.commission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
