import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import logo from "../../images/logos/logo.png";
import googleLogo from "../../images/logos/gogole.png";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUSer,setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, email } = result.user;
            const user = {name: displayName, email:email};
            setLoggedInUser(user);
            history.replace(from);
          })
          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
  };

  return (
    <Container>
      <div className="w-100 text-center">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="login-box d-flex align-items-center justify-content-center">
        <div className="">
          <h2 className="font-weight-bold text-center">Login with</h2>
          <Button
            size="lg"
            variant="outline-dark"
            className="form-control"
            onClick={handleGoogleLogin}
          >
            <img
              src={googleLogo}
              alt=""
              style={{ width: "25px" }}
              className="img-fluid"
            />{" "}
            Login with Google
          </Button>
          <p className="mt-3 text-center">Dont have an account? <span className="text-primary"> <u>Create an account</u> </span> </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
