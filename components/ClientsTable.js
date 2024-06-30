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
              <td>{client.fullName}</td>
              <td>{client.bankName}</td>
              <td>{client.cibilScore}</td>
              <td>{client.status}</td>
              <td>{client.commision}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
