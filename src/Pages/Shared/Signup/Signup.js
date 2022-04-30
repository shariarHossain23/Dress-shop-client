import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../../src/Images/google.png";
import auth from "../../../firebase.init";
import PageTitle from "../PageTItle/PageTitle";

const Signup = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loading1, error1] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, useremail, loadingemail, erroremail] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [information, setInformation] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    otherError: "",
  });

  const handleNameForm = (event) => {
    setInformation({ ...information, name: event.target.value });
  };
  const handleEmailForm = (event) => {
    const regex = /.+@[^@]+\.[^@]{2,}$/.test(event.target.value);
    if (regex) {
      setInformation({ ...information, email: event.target.value });
      setError({ ...error, email: "" });
    } else {
      setError({ ...error, email: "invalid email" });
      setInformation({ ...information, email: "" });
    }
  };

  const handlePassword = (event) => {
    const validPassword = /.{6,}/.test(event.target.value);
    if (validPassword) {
      setInformation({ ...information, password: event.target.value });
      setError({ ...error, password: "" });
    } else {
      setError({ ...error, password: "password minimum 6 character" });
      setInformation({ ...information, password: "" });
    }
  };

  const handleConfirmPass = (event) => {
    if (information.password === event.target.value) {
      setInformation({ ...information, confirmPass: event.target.value });
      setError({ ...error, confirmPass: "" });
    } else {
      setError({ ...error, confirmPass: "password don't match" });
      setInformation({ ...information, confirmPass: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (information.confirmPass) {
      createUserWithEmailAndPassword(information.email, information.password);
    }
  };

  useEffect(() => {
    if (erroremail) {
      switch (erroremail?.code) {
        case "auth/email-already-in-use":
          setError({ ...error, otherError: "email already use" });
      }
    }
  }, [erroremail]);

  //   redirect and create jwt token

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const email = information.email;
  useEffect(()=>{
    if (user) {
        axios
          .post("https://secure-reaches-83838.herokuapp.com/login", { email })
          .then((response) => {
            localStorage.setItem("userToken", response.data);
            navigate(from, { replace: true });
            toast.success("signup success")
          });
      }
  },[user])

  console.log(error);
  return (
    <div>
      <PageTitle title="signup"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto form-style">
            <h1>Sign up</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  onChange={handleNameForm}
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleEmailForm}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-danger">{error.email}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                  required
                />
                <Form.Text className="text-danger">{error.password}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  onChange={handleConfirmPass}
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <Form.Text className="text-danger">
                  {error.confirmPass}
                </Form.Text>
              </Form.Group>

              <Form.Text className="text-danger">{error.otherError}</Form.Text>
              <Button
                className="inventory-btn w-100 rounded-pill mt-2"
                variant="primary"
                type="submit"
              >
                Signup
              </Button>
            </Form>
            <p className="text-center mt-2 text-muted">
              Already have account?
              <Link
                style={{ fontWeight: "500" }}
                className="text-decoration-none text-black"
                to="/login"
              >
                Log In
              </Link>{" "}
            </p>
            <div className="d-flex justify-center align-items-center mt-2">
              <div
                className="w-50"
                style={{ border: "1px solid #6c757d", height: "1px" }}
              ></div>
              <p className="mt-2 mx-2">or</p>
              <div
                className="w-50"
                style={{ border: "1px solid #6c757d", height: "1px" }}
              ></div>
            </div>

            <div
              onClick={() => signInWithGoogle()}
              className="d-flex align-items-center login-btn"
            >
              <img width={30} src={logo} alt="" />
              <span className="ms-5">continue with google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
