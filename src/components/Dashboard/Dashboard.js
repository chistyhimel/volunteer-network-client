import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [regesterdWork, setRegesteredWork] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:5000/regesteredVoluntary?email=" + loggedInUser.email
    )
      .then((response) => response.json())
      .then((data) => {
        setRegesteredWork(data);
      });
  }, []);

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newWork = regesterdWork.filter((work) => work._id !== id);
        setRegesteredWork(newWork);
      });
  };

  return (
    <Container>
      <NavBar></NavBar>
      <Row>
        {regesterdWork.map((work) => (
          <Col md={6} className="rounded mt-4">
            <Row className="voluntary-card p-3">
              <Col md={5}>
                <img src={work.img} alt="" className="img-fluid rounded" />
              </Col>
              <Col md={7}>
                <h4 className="font-weight-bold mt-2">{work.work}</h4>
                <p className="font-weight-bold pt-3">{work.date}</p>
                <button
                  onClick={() => handleDeleteItem(work._id)}
                  type="button"
                  className="btn btn-light cancel-button"
                >
                  Cancel
                </button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
