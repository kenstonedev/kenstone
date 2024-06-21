// components/ClientsTable.js
import React from "react";

const ClientsTable = ({clients}) => {

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
              <td>{client.Name}</td>
              <td>{client.Bank}</td>
              <td>{client.Score}</td>
              <td>{client.Status}</td>
              <td>{client.Commission}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
