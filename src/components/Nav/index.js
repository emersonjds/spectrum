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

const NavMenu = (props) => {
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
              <NavLink tag={Link} to="/opportunities">
                Oportunidade de Emprego
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/vacancies">
                Cadastrar Vaga
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/professional">
                Profissionais Cadastrados
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/courses">
                Cursos
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/enterprises">
                Parceiros
              </NavLink>
            </NavItem>
            <NavbarText>
              <Button
                onClick={toggleModal}
                style={{
                  backgroundColor: "#9B519A",
                  color: "#FFF",
                  width: "10rem",
                }}
              >
                Fazer Login
              </Button>
            </NavbarText>
          </Nav>
        </Collapse>
        <div>
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Area de Login</ModalHeader>
            <ModalBody
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                height: 200,
              }}
            >
              <Link to="/profile">
                <Button color="success">Ja tenho cadastro</Button>
              </Link>

              <Link to="/enterpriseArea">
                <Button color="info">Logar como Empresa</Button>
              </Link>
            </ModalBody>
          </Modal>
        </div>
      </Navbar>
    </div>
  );
};

export default NavMenu;
