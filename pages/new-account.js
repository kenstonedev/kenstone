import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewAccount = () => {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center mb-4">
            <img src="/kenstone-capital.png" alt="Kenstone Capital" />
          </div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="2" controlId="formPrefix">
                <Form.Label>Mr/Ms/Mrs</Form.Label>
                <Form.Control type="text" placeholder="Mr/Ms/Mrs" />
              </Form.Group>
              <Form.Group as={Col} md="10" controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the full name"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email - ID</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter the Email - ID"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the phone number"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="formPanNumber">
                <Form.Label>PAN Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the PAN Number"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="formAadharNumber">
                <Form.Label>Aadhar Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the Aadhar Number"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formHomeAddress">
                <Form.Label>Home Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the full address"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="formBankName">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the Bank name"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="formBankBranch">
                <Form.Label>Bank Branch</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the Branch Name"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="formIfscCode">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter the IFSC Code"
                />
              </Form.Group>
            </Row>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Generate Sign In Details
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewAccount;
