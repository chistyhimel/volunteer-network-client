import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import logo from "../../images/logos/logo.png";
import userIcon from "../../images/logos/users-alt 1.png";
import plusIcon from "../../images/logos/plus 1.png";
import RegisteredList from "./RegisteredList";
import AddEvent from "./AddEvent";
import Home from "../Home/Home";

const Admin = () => {
  return (
    <Router>
      <Container>
        <Row>
          <Col md={3}>
            <Link to="/home">
              <img src={logo} alt="" className="img-fluid" />
            </Link>
            <Link
              to="/admin/Volunteer Reginter List"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6 className="mt-4">
                <img src={userIcon} alt="" style={{ width: "20px" }} />{" "}
                Volunteer register list
              </h6>
            </Link>
            <Link
              to="/addEvent"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h6 className="mt-3">
                <img src={plusIcon} alt="" style={{ width: "20px" }} /> Add
                event
              </h6>
            </Link>
          </Col>
          <Col md={7}>
            <Switch>
              
              <Route path="/admin/:volunteerReginterList">
                <RegisteredList />
              </Route>
              <Route path="/addEvent">
                <AddEvent />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default Admin;
