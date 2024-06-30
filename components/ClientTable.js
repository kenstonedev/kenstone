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
          <td>{client.fullName}</td>
          <td>{client.bankName}</td>
          <td>{client.emailId}</td>
          <td>{client.phoneNumber}</td>
          <td>
            <Badge
              bg={
                client.status === "completed"
                  ? "success"
                  : client.status === "processing"
                  ? "warning"
                  : "danger"
              }
            >
              {client.status}
            </Badge>
          </td>
          <td>{client.cibilScore}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ClientTable;
