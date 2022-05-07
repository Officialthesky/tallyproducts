import React, { useState } from "react";
import "./index.css";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { activeCss } from "./activeCss";
import { navData } from "./navData";
export default function Header() {
  const [selectedTab, setSelectedTab] = useState(1);
  let navigate = useNavigate();

  const goToTab = (index) => {
    if (index === 0) {
      navigate(`/`);
      setSelectedTab(0);
    } else {
      navigate(`/manage-products`);
      setSelectedTab(1);
    }
  };
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
          let isActive = selectedTab === index;
          return (
            <div key={index}>
              <Nav
                className="navName"
                onClick={() => goToTab(index)}
                style={isActive ? activeCss : {}}
              >
                {item.navName}
              </Nav>
            </div>
          );
        })}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
