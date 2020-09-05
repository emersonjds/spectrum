import React from "react";
import NavMenu from "../../components/Nav";
import Footer from "../../components/Footer";
import { Row, Col, Input, Button, FormGroup, Label } from "reactstrap";

import {
  MainContainer,
  BoxProfessional,
  ImageProfessional,
  TitleCard,
  Subtitle,
} from "./styles.js";

import { partners } from "../../mock";

export default function EnterpriseArea() {
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
        <Row style={{ marginTop: 25 }}>
          {partners.map((partner) => (
            <Col
              md={3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <BoxProfessional key={partner.id}>
                <ImageProfessional src={partner.imgUrl} />
                <TitleCard>{partner.name}</TitleCard>
                <Subtitle>
                  <span style={{ fontWeight: "bold" }}>Area de atuação</span>:
                  {partner.profession}
                </Subtitle>

                <Subtitle>
                  <span style={{ fontWeight: "bold" }}>Cursos: </span>
                  {partner.descriptionCourse}
                </Subtitle>

                <TitleCard>Ver todos os cursos</TitleCard>
              </BoxProfessional>
            </Col>
          ))}
        </Row>
      </MainContainer>
      <Footer />
    </>
  );
}
