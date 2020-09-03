import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
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
} from "reactstrap";
import Section from "../../components/Section";
import "./style.css";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Oportunidade de Empregos</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Profissionais Cadastrados
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Cadastrar Vagas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Cursos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Empresas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Parceiros
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Button>Login</Button>
            </NavbarText>
          </Collapse>
        </Navbar>
        <Section bkgColor={"#BDA687"}>
          <Container>
            <Row>
              <Col md={6}>Image</Col>
              <Col md={6}>
                <div className="textMainBanner">
                  Spectrum é uma plataforma digital que oferece oportunidades de
                  emprego para autistas e consultoria para empresas que
                  pretendem conhecer e inclui-los no mercado de trabalho. Além
                  disso, por meio de voluntários cadastrados, são oferecidos
                  cursos gratuitos a pessoas que estão no espectro e pagos para
                  quem se interessar pelo projeto. É uma forma de criar vínculos
                  e compreender melhor a importância das relações entre
                  neurotípicos e neurodiversos.
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
        <Container>
          <h3>Ultimas vagas cadastradas</h3>
        </Container>

        <Section>
          <h4>Area de Vagas</h4>
        </Section>
      </Container>
    </>
  );
}
