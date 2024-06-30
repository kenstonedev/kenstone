import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Image,
} from "react-bootstrap";
import Navbar from "../components/AdminNavbar";
import Sidebar from "../components/AdminSidebar";

const ClientList = () => {
  const clients = [
    {
      name: "John Doe",
      bankManager: "Manish Paul",
      bank: "HDFC",
      branch: "Hanumanthanagar",
      ifsc: "HDFC1234",
      commission: "5%",
      referrals: 12,
      accepted: "50%",
      image: "/images/client1.jpg",
    },
    // Add more client data here
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <Container className="my-4">
          <Row className="justify-content-between align-items-center mb-3">
            <Col>
              <h2>Client List</h2>
              <p>Total: 24 Clients</p>
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
                <th>Bank Manager</th>
                <th>Bank Name</th>
                <th>Branch</th>
                <th>IFSC Code</th>
                <th>Commission</th>
                <th>Referrals</th>
                <th>Accepted %</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>
                    <Image
                      src={client.image}
                      roundedCircle
                      width={30}
                      height={30}
                      alt="user"
                      className="me-2"
                    />
                    {client.name}
                  </td>
                  <td>{client.bankManager}</td>
                  <td>{client.bank}</td>
                  <td>{client.branch}</td>
                  <td>{client.ifsc}</td>
                  <td>{client.commission}</td>
                  <td>{client.referrals}</td>
                  <td>{client.accepted}</td>
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
