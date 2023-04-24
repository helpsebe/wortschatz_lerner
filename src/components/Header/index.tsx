import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon";
import { NavbarLogo } from "./style";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Container fluid="sm">
      <Navbar bg="#fff" expand="sm">
        <NavbarLogo>
          <LogoIcon />
        </NavbarLogo>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav activeKey={pathname} className="ms-auto">
            <NavLink to="/" className="nav-link">
              Тренировка
            </NavLink>
            <NavLink to="/profile/edit" className="nav-link">
              Профиль
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
