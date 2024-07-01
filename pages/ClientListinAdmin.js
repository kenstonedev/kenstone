import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Card,
  Dropdown,
} from "react-bootstrap";
import Navbar from "../components/AdminNavbar";
import Sidebar from "../components/AdminSidebar";
import { db } from "../firebase"; // Ensure the path is correct
import { collection, getDocs, doc, updateDoc, query, orderBy, limit, startAfter } from "firebase/firestore";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchClients = async (loadMore = false) => {
    setLoading(true);
    try {
      const clientsQuery = loadMore
        ? query(collection(db, "clients"), orderBy("createdAt", "desc"), startAfter(lastVisible), limit(10))
        : query(collection(db, "clients"), orderBy("createdAt", "desc"), limit(10));
      
      const querySnapshot = await getDocs(clientsQuery);
      const fetchedClients = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      if (querySnapshot.docs.length > 0) {
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }

      setClients(loadMore ? [...clients, ...fetchedClients] : fetchedClients);
      setHasMore(querySnapshot.docs.length > 0);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const getStatusCount = (status) => {
    return clients.filter(client => client.status === status).length;
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const clientDoc = doc(db, "clients", id);
      await updateDoc(clientDoc, { status: newStatus });
      setClients(clients.map(client =>
        client.id === id ? { ...client, status: newStatus } : client
      ));
    } catch (error) {
      console.error("Error updating status:", error);
    }
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
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.fullName}</td>
                  <td>{client.emailId}</td>
                  <td>{client.phoneNumber}</td>
                  <td>
                    <Dropdown onSelect={(newStatus) => handleStatusChange(client.id, newStatus)}>
                      <Dropdown.Toggle id="dropdown-basic">
                        {client.status}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="Processing">Processing</Dropdown.Item>
                        <Dropdown.Item eventKey="Rejected">Rejected</Dropdown.Item>
                        <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>{client.cibilScore}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {hasMore && (
            <div className="text-center">
              <Button variant="primary" onClick={() => fetchClients(true)} disabled={loading}>
                {loading ? 'Loading...' : 'Load More'}
              </Button>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default ClientList;
