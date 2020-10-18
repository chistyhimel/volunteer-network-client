import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logos/logo.png";
import { UserContext } from "../../App";
const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Container>
      <Navbar expand="md">
        <Navbar.Brand href="#home">
          <Link to="/home">
            <img src={logo} alt="" className="" style={{ width: "180px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ml-auto w-100 pl-lg-5 justify-content-between">
            <Link to="/home">
              <Nav.Link href="#home" className="font-weight-bold">
                Home
              </Nav.Link>
            </Link>
            <Nav.Link href="#features" className="font-weight-bold">
              Donation
            </Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">
              Event
            </Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">
              Blog
            </Nav.Link>

            {loggedInUser.email ? (
              <Nav.Link className="font-weight-bold text-primary">
                <Link to="/user/dashboard">{loggedInUser.name}</Link>
              </Nav.Link>
            ) : (
              <Link to="/login">
                <Button variant="primary" size="lg">
                  Login
                </Button>
              </Link>
            )}

            <Link to="/admin/Volunteer Reginter List">
              <Button variant="dark" size="lg">
                Admin
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
