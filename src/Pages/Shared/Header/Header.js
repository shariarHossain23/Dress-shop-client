import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Images/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img width={60} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/">sh</ActiveLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
