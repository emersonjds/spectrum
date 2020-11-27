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

const NavEnterprise = (props) => {
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
              <NavLink>Ultimas vagas Cadastradas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Perfis Selecionados</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>Consultorias Agendadas</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>Entrevistas do Dia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Meus Cursos</NavLink>
            </NavItem>

            <NavbarText>
              <Link to="/">
                <Button
                  style={{
                    backgroundColor: "#9B519A",
                    color: "#FFF",
                    width: "10rem",
                  }}
                >
                  Sair
                </Button>
              </Link>
            </NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavEnterprise;
