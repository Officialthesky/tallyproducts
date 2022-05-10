import React from "react";
import "./index.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import { navData } from "./navData";
import BottomBorder from "./BottomBorder";
export default function Header() {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const goToTab = (index) => {
    if (index === 1) {
      navigate(`/`);
    } else {
      navigate(`/manage-products`);
    }
  };
  let isHomeActive = pathname === "/";
  let isManageAcive = pathname === "/manage-products";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ height: "10vh" }}
    >
      <Container>
        {navData.map((item, index) => {
          return (
            <Nav
              key={index}
              className="navName"
              onClick={() => goToTab(item.id)}
            >
              {item.navName}
              {index === 0 && isHomeActive && <BottomBorder display={true} />}
              {index === 1 && isManageAcive && <BottomBorder display={true} />}
            </Nav>
          );
        })}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
