import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Verify correct path to firebase.js
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import Navbar from "../components/AdminNavbar"; // Adjusted import path
import Sidebar from "../components/AdminSidebar"; // Adjusted import path
import { Container, Row, Col, Table, Button, Dropdown } from "react-bootstrap";

const BankManagers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState("Bank Manager");

  const fetchUsers = async () => {
    try {
      const q = query(collection(db, "users"), where("role", "==", selectedRole), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userData);
      console.log(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedRole]);

  const handleSelect = (eventKey) => {
    setSelectedRole(eventKey);
    fetchUsers();
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <Container className="my-4">
          <Row className="justify-content-between align-items-center mb-3">
            <Col>
              <p>Total: {users.length} {selectedRole}s</p>
            </Col>
            <Col className="text-end">
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  Select Role
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Bank Manager">Bank Managers</Dropdown.Item>
                  <Dropdown.Item eventKey="Charted Accountant">Chartered Accountants</Dropdown.Item>
                  <Dropdown.Item eventKey="Loan Agent">Loan Agents</Dropdown.Item>
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
                    <td>{user.fullName}, {user.bankName}</td>
                    <td>{user.bankBranch}</td>
                    <td>{user.ifscCode}</td>
                    <td>{user.commission}</td>
                    <td>{user.referrals || 0}</td>
                    <td>{user.accepted}</td>
                  </tr>
                ))}
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
