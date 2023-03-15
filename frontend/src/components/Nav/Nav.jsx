import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./nav.css";

export default function Nav() {
  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand className="navbar-brand-name" href="#home">
            <img
              alt=""
              src="/assets/twitter.png"
              width="47"
              height="47"
              className="d-inline-block align-top"
            />{" "}
            <span>Tweeto</span>
          </Navbar.Brand>
          <div style={{display:"flex",gap:"2rem"}}>
            <span>Register</span>
            
            <span>Login</span>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
