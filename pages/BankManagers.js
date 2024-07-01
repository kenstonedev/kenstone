import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Verify correct path to firebase.js
import { collection, query, getDocs, where, orderBy, updateDoc, doc } from "firebase/firestore";
import Navbar from "../components/AdminNavbar"; // Adjusted import path
import Sidebar from "../components/AdminSidebar"; // Adjusted import path
import { Container, Row, Col, Table, Button, Dropdown } from "react-bootstrap";

const BankManagers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState("Bank Manager");
  const [editCommissionId, setEditCommissionId] = useState(null);
  const [commission, setCommission] = useState("");

  const fetchUsers = async () => {
    try {
      const q = query(collection(db, "users"), where("role", "==", selectedRole), orderBy("createdAt", "desc"));
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

  useEffect(() => {
    fetchUsers();
  }, [selectedRole]);

  const handleSelect = (eventKey) => {
    setSelectedRole(eventKey);
    fetchUsers();
  };

  const handleEditClick = (userId, currentCommission) => {
    setEditCommissionId(userId);
    setCommission(currentCommission);
  };

  const handleCommissionChange = (e) => {
    setCommission(e.target.value);
  };

  const handleCommissionBlur = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        commission: parseFloat(commission),
      });
      const updatedUsers = users.map(user => user.id === userId ? { ...user, commission: parseFloat(commission) } : user);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error updating commission:", error);
    }
    setEditCommissionId(null);
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
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.fullName}, {user.bankName}</td>
                    <td>{user.bankBranch}</td>
                    <td>{user.ifscCode}</td>
                    <td>
                      {editCommissionId === user.id ? (
                        <input
                          type="number"
                          value={commission}
                          onChange={handleCommissionChange}
                          onBlur={() => handleCommissionBlur(user.id)}
                          autoFocus
                          style={{ width: "70px" }}
                        />
                      ) : (
                        <span onClick={() => handleEditClick(user.id, user.commission)}>
                          {user.commission}
                        </span>
                      )}
                    </td>
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
