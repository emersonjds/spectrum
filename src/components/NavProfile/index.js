import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const NavProfile = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => setModal(!modal);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#FFF3f1" light expand="md">
        <NavbarBrand href="/">
          <Link to="/">
            <img src={logo} alt="" height="180" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="mr-auto"
            navbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "61vw",
            }}
          >
            <NavItem>
              <NavLink>Historico de Vagas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Meus Cursos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/professional">
                Acompanhamento de Vagas
              </NavLink>
            </NavItem>
            <NavbarText>
              <Button
                style={{
                  backgroundColor: "#9B519A",
                  color: "#FFF",
                  width: "10rem",
                }}
              >
                Sair
              </Button>
            </NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavProfile;
