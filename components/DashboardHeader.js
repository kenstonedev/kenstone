import React from "react";
import { Row, Col } from "react-bootstrap";

const DashboardHeader = ({ total, processing, pending, completed }) => (
  <Row className="text-center my-4">
    <Col>
      <h5>Total Clients</h5>
      <h2>{total}</h2>
    </Col>
    <Col>
      <h5>Processing</h5>
      <h2>{processing}</h2>
    </Col>
    <Col>
      <h5>Pending</h5>
      <h2>{pending}</h2>
    </Col>
    <Col>
      <h5>Completed</h5>
      <h2>{completed}</h2>
    </Col>
  </Row>
);

export default DashboardHeader;
