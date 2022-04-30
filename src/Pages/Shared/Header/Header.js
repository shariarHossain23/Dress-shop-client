import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../Images/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth)
  }
  return (
    <div className="sticky-top">
      <Navbar  bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img-fluid" width={60} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ActiveLink to="/">Home</ActiveLink>
              {
                user && <>
                <ActiveLink to="/manageinventory">Manage Items</ActiveLink>
                <ActiveLink to="/additem">Additems</ActiveLink>
                <ActiveLink to="/myitems">My items</ActiveLink>
                </>
              }
               <ActiveLink to="/blogs">Blog</ActiveLink>
              { user?<button className="btn btn-link text-decoration-none logout-btn" onClick={()=> handleSignOut() }>Logout</button>:
                <ActiveLink to="/login">Login</ActiveLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
