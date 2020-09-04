import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/opportunities/">Oportunidade de Empregos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Cadastras Vaga</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/professionais">Profissionais Cadastrados</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Cursos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Empresas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Parceiros</NavLink>
            </NavItem>
            <NavbarText>
              <Button>Fazer Login</Button>
            </NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
