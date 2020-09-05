import React from "react";
import NavMenu from "../../components/Nav";
import Footer from "../../components/Footer";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";

import CardComponent from "../../components/Card";
import { courseCards } from "../../mock";

import { MainContainer } from "./styles.js";

export default function Courses() {
  return (
    <>
      <NavMenu />

      <MainContainer>
        <Row form style={{ marginBottom: 20 }}>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Busque por curso ou area</Label>
              <Input
                type="text"
                name="city"
                placeholder="Informe o curso desejado"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Estado</Label>
              <Input type="text" name="state" placeholder="SP, MG, RJ, RN" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <Button style={{ marginTop: 32, marginLeft: 10 }} color="info">
              Buscar
            </Button>{" "}
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              Cursos Disponiveis
            </p>
          </Col>
        </Row>

        <Row
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {courseCards.map((dataCard) => (
            <Col
              md={3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <CardComponent card={dataCard} />
              <Button style={{ marginBottom: 25 }}>
                Faça Login para se inscrever
              </Button>
            </Col>
          ))}
        </Row>
      </MainContainer>
      <Footer />
    </>
  );
}
