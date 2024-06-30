import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Verify correct path to firebase.js
import { collection, query, getDocs, where } from "firebase/firestore";
import Navbar from "../components/AdminNavbar"; // Adjusted import path
import Sidebar from "../components/AdminSidebar"; // Adjusted import path
import { Container, Row, Col, Table, Button, Dropdown } from "react-bootstrap";

const BankManagers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState("bankManager");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const q = query(collection(db, "users"), where("role", "==", selectedRole));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [selectedRole]);

  const handleSelect = (eventKey) => {
    setSelectedRole(eventKey);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <Container className="my-4">
          <Row className="justify-content-between align-items-center mb-3">
            <Col>
              <p>Total: {users.length} Bank Managers</p>
            </Col>
            <Col className="text-end">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  Select Role
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="bankManager">Bank Managers</Dropdown.Item>
                  <Dropdown.Item eventKey="chartedAccountant">Chartered Accountants</Dropdown.Item>
                  <Dropdown.Item eventKey="loanAgent">Loan Agents</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {loading ? (
            <div>Loading...</div>
          ) : (
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
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}, {user.bank}</td>
                    <td>{user.branch}</td>
                    <td>{user.ifsc}</td>
                    <td>{user.commission}</td>
                    <td>{user.referrals}</td>
                    <td>{user.accepted}</td>
                  </tr>
                ))}
                {/* Dummy data */}
                <tr>
                  <td>John Doe, HDFC</td>
                  <td>MG Road</td>
                  <td>HDFC0001234</td>
                  <td>5%</td>
                  <td>15</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>Jane Smith, ICICI</td>
                  <td>Koramangala</td>
                  <td>ICICI0005678</td>
                  <td>7%</td>
                  <td>20</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </Table>
          )}
          <div className="text-center">
            <Button variant="primary">Load More</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BankManagers;
