// components/ClientList.js
import React from "react";

const ClientList = ({clients}) => {

  return (
    <div className="p-3 bg-light">
      <h5 className="mb-3">Client List</h5>
      {clients.map((client, index) => (
        <div key={index} className="d-flex align-items-center mb-3">
          <div
            className="bg-secondary rounded-circle"
            style={{ width: "50px", height: "50px" }}
          ></div>
          {/* <img src={client.image} alt="" /> */}
          <div className="ml-3">
            <p className="mb-0">{client.fullName}</p>
            <p className="mb-0 text-muted">{client.emailId}</p>
          </div>
          <button className="btn btn-link ml-auto">✎</button>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
