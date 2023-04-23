import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavbarLogo = styled(Navbar.Brand)`
  max-width: 300px;
  svg {
    max-width: 100%;
  }
  @media (max-width: 576px) {
    max-width: 200px;
  }
`;
