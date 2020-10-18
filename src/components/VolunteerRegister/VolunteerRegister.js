import React, { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./VolunteerRegister.css";
import logo from "../../images/logos/logo.png";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import VoluntaryData from "../VoluntaryData/VoluntaryData";

const VolunteerRegister = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { work } = useParams();
  const regesterWork = VoluntaryData.find(
    (data) => data.name.toLowerCase() === work.toLowerCase()
  );

  const onSubmit = (data) => {
    data.img = regesterWork.img;
    console.log(data);
    fetch("https://sheltered-caverns-94338.herokuapp.com/volunteerRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Registerd Succesfully");
          data = {};
        }
      });
  };
  return (
    <Container>
      <img src={logo} alt="" className="mx-auto d-block logo" />
      <div className="register-container">
        <h4 className="font-weight-bold text-center mb-4">
          Register as a Volunteer
        </h4>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            type="text"
            name="name"
            placeholder="Full Name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Control
            type="text"
            name="email"
            value={loggedInUser.email}
            ref={register({ required: true })}
          />
          {errors.email && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Control
            type="date"
            name="date"
            ref={register({ required: true })}
          />
          {errors.date && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            ref={register({ required: true })}
          />
          {errors.description && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <Form.Control
            type="text"
            name="work"
            value={work}
            ref={register({ required: true })}
          />
          {errors.work && (
            <small className="text-danger">This field is required</small>
          )}
          <br />
          <button type="submit" className="btn btn-primary form-control">
            Register
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default VolunteerRegister;
