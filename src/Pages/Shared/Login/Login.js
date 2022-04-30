import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../../src/Images/google.png";
import auth from "../../../firebase.init";
import PageTitle from "../PageTItle/PageTitle";
import Spinner from "../Spinner/Spinner";
import "./Login.css";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loading1, error1] =
    useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      useremail,
      loadingemail,
      erroremail,
    ] = useSignInWithEmailAndPassword(auth);
  const email = user?.email;
  let navigate = useNavigate();
  let location = useLocation();


  const [information, setInformation] = useState({
    email: "",
    password: ""
  });
  const [inputError, setError] = useState({
    email: "",
    password: "",
  });
  
 console.log(inputError);
  const handleEmailForm = (event) => {
    const regex = /.+@[^@]+\.[^@]{2,}$/.test(event.target.value);
    if(regex){
      setInformation({...information,email:event.target.value})
      setError({...inputError,email:""})
    }
    else{
      setError({...inputError,email:"invalid email"})
      setInformation({...information,email:""})
    }
  };
  
  const handlePassword = event =>{
    setInformation({...information,password:event.target.value})
  }
 

 const handleSignIn = event =>{
   event.preventDefault()
   signInWithEmailAndPassword(information.email,information.password)
 }


 

  // redirect
 let from = location.state?.from?.pathname || "/";
 useEffect(()=>{
  if (user) {
    axios
      .post("https://secure-reaches-83838.herokuapp.com/login", { email })
      .then((response) => {
        localStorage.setItem("userToken", response.data);
        navigate(from, { replace: true });
        toast.success("login successful")
      });
  }
 },[user])
 

  useEffect(()=>{
   if(erroremail){
    switch(erroremail?.code){
      case"auth/wrong-password":
      setError({...inputError,password:"wrong password"})
     }
   }
  },[erroremail])
  useEffect(()=>{
   if(erroremail){
    switch(erroremail?.code){
      case"auth/user-not-found":
      setError({...inputError,email:"invalid email"})
     }
   }
  },[erroremail])

  if (loading) {
    <Spinner></Spinner>;
  }
  return (
    <div>
      <PageTitle title="login"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto form-style">
            <Form onSubmit={handleSignIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleEmailForm} type="email" placeholder="Enter email" required />
                <Form.Text className="text-danger">
                 {inputError.email}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                <Form.Text className="text-danger">
                 {inputError.password}
                </Form.Text>
              </Form.Group>
              <button className="btn btn-link text-decoration-none text-muted fs-6 mb-1">forgot password</button>
              <Button className="inventory-btn w-100 rounded-pill" variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <p className="text-center mt-2 text-muted">you are new?<Link style={{fontWeight:"500"}} className="text-decoration-none text-black" to='/signup'>signup</Link> </p>
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

export default Login;
