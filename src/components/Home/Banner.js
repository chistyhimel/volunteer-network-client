import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

const Banner = () => {
  return (
    <Container className="pt-5">
      <h1 className="text-center font-weight-bold mt-5">
        I GROW BY HELPING PEOPLE IN NEED.
      </h1>
      <div className="input-group input-group-lg search-box">
        <input
          type="text"
          className="form-control "
          placeholder="Search..."
        />
        <div className="input-group-append">
          <button className="btn btn-primary" id="basic-addon2">
            Search
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
