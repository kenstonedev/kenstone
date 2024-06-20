import React from "react";
import { Table, Badge } from "react-bootstrap";

const ClientTable = ({ clients }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Bank</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Status</th>
        <th>CIBIL Score</th>
      </tr>
    </thead>
    <tbody>
      {clients.map((client, index) => (
        <tr key={index}>
          <td>{client.name}</td>
          <td>{client.bank}</td>
          <td>{client.email}</td>
          <td>{client.phone}</td>
          <td>
            <Badge
              bg={
                client.status === "Completed"
                  ? "success"
                  : client.status === "Processing"
                  ? "warning"
                  : "danger"
              }
            >
              {client.status}
            </Badge>
          </td>
          <td>{client.cibil}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ClientTable;
