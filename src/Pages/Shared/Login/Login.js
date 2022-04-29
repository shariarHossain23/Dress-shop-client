import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import logo from '../../../../src/Images/google.png';
import auth from "../../../firebase.init";
import PageTitle from "../PageTItle/PageTitle";
import './Login.css';


const Login = () => {
    const [signInWithGoogle, userGoogle, loading1, error1] = useSignInWithGoogle(auth);
  return (
    <div>
      <PageTitle title="login"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <Form>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div className="d-flex justify-center align-items-center mt-5">
              <div className="w-50" style={{border:"1px solid #6c757d",height:"1px"}}></div>
               <p className="mt-2 mx-2">or</p>
              <div className="w-50" style={{border:"1px solid #6c757d",height:"1px"}}></div>
              </div>

              <div onClick={()=> signInWithGoogle()} className="d-flex align-items-center login-btn">
              <img width={30} src={logo} alt="" />
               <span className="ms-5">continue with google</span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
