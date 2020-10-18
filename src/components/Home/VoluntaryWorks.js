import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import VoluntaryData from "../VoluntaryData/VoluntaryData";

const VoluntaryWorks = () => {
  return (
    <Container>
      <Row className="voluntary-container">
        {VoluntaryData.map((voluntary) => (
          <Col
            md={6}
            lg={3}
            key={voluntary.id}
            className="text-center text-white mb-4"
          > <Link to={`/register/${voluntary.name}`} style={{ textDecoration: 'none' ,color:"white"}}>
            <Card style={{ backgroundColor: `${voluntary.bgColor}` }}>
              <Card.Img variant="top" src={voluntary.img} />
              <Card.Body>
                <h6 className="font-weight-bold">{voluntary.name}</h6>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VoluntaryWorks;
