import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Card,
} from "react-bootstrap";
import Navbar from "../components/AdminNavbar";
import Sidebar from "../components/AdminSidebar";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients data from an API or database here
    // For now, using dummy data
    const fetchedClients = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        status: "Processing",
        cibil: 750,
        image: "/images/client1.jpg",
      },
      // Add more client data here
    ];
    setClients(fetchedClients);
  }, []);

  const getStatusCount = (status) => {
    return clients.filter(client => client.status === status).length;
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Container className="my-4">
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Total Clients</Card.Title>
                  <Card.Text>{clients.length}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Processing</Card.Title>
                  <Card.Text>{getStatusCount("Processing")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Rejected</Card.Title>
                  <Card.Text>{getStatusCount("Rejected")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Completed</Card.Title>
                  <Card.Text>{getStatusCount("Completed")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-3">
            <Col>
              <h2>Client List</h2>
              <p>Total: {clients.length} Clients</p>
            </Col>
            <Col className="text-end">
              <Button variant="outline-secondary">
                <i className="bi bi-filter"></i> Filter
              </Button>
            </Col>
          </Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
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
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.status}</td>
                  <td>{client.cibil}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-center">
            <Button variant="primary">Load More</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClientList;
