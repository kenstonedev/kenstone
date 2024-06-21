import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Image,
} from "react-bootstrap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BankManagers = () => {
  const bankManagers = [
    {
      name: "Manish Paul",
      bank: "HDFC",
      branch: "Hanumanthanagar",
      ifsc: "HDFC1234",
      commission: "10%",
      referrals: 32,
      accepted: "20%",
      image: "/images/manager1.jpg",
    },
    // Add more bank manager data here
  ];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar/>
        <Container className="my-4">
          <Row className="justify-content-between align-items-center mb-3">
            <Col>
              <h2>Bank Managers</h2>
              <p>Total: 24 Bank Managers</p>
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
                <th>Name, Bank Name</th>
                <th>Branch</th>
                <th>IFSC Code</th>
                <th>Commission</th>
                <th>Referrals</th>
                <th>Accepted %</th>
              </tr>
            </thead>
            <tbody>
              {bankManagers.map((manager, index) => (
                <tr key={index}>
                  <td>
                    <Image
                      src={manager.image}
                      roundedCircle
                      width={30}
                      height={30}
                      className="me-2"
                    />
                    {manager.name}, {manager.bank}
                  </td>
                  <td>{manager.branch}</td>
                  <td>{manager.ifsc}</td>
                  <td>{manager.commission}</td>
                  <td>{manager.referrals}</td>
                  <td>{manager.accepted}</td>
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

export default BankManagers;
