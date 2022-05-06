import React from "react";
import "./index.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Header() {
  let navigate = useNavigate();

  const goToManageProducts = () => {
    navigate(`/manage-products`);
  };

  const goToHome = () => {
    navigate(`/`);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Nav className="home" onClick={goToHome}>
          Home
        </Nav>
        <Nav className="manageProducts" onClick={goToManageProducts}>
          Manage Products
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
