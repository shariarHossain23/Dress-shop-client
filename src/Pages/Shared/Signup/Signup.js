import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../../src/Images/google.png";
import auth from "../../../firebase.init";
import PageTitle from "../PageTItle/PageTitle";

const Signup = () => {
  const [signInWithGoogle, userGoogle, loading1, error1] =
    useSignInWithGoogle(auth);

    const [information,setInformation] = useState({
        name:"",
        email:"",
        password:""
    })
    const [error,setError] = useState({
        name:"",
        email:"",
        password:""
    })

    
  return (
    <div>
      <PageTitle title="signup"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto form-style">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button
                className="inventory-btn w-100 rounded-pill"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="text-center mt-2 text-muted">
               Already have account?
              <Link style={{fontWeight:"500"}} className="text-decoration-none text-black" to="/login">
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
