import React from "react";

import MenuNav from "../../components/Nav";
import Footer from "../../components/Footer";
import {
  MainContainer,
  BoxProfessional,
  ImageProfessional,
  TitleCard,
  Subtitle,
  Description,
} from "./styles.js";

import { Row, Col, Input, Button, FormGroup, Label } from "reactstrap";

import { candidates } from "../../mock";

export default function Professional() {
  return (
    <>
      <MenuNav />
      <MainContainer>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Busque por nome ou profissao</Label>
              <Input
                type="text"
                name="city"
                placeholder="Busque por candidato ou area de atuação"
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
          {candidates.map((candidate) => (
            <Col
              md={3}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BoxProfessional key={candidate.id}>
                <ImageProfessional src={candidate.imgUrl} />
                <TitleCard>{candidate.name}</TitleCard>
                <Subtitle>
                  <span style={{ fontWeight: "bold" }}>Area de atuação</span>:
                  {candidate.profession}
                </Subtitle>
                <Subtitle>
                  <span style={{ fontWeight: "bold" }}>Formação: </span>
                  {candidate.description}
                </Subtitle>
                <Description>
                  <span style={{ fontWeight: "bold" }}>Hiperfocus: </span>
                  {candidate.hyperfocus}
                </Description>
                <TitleCard>Entrar em contato</TitleCard>
              </BoxProfessional>
            </Col>
          ))}
        </Row>
      </MainContainer>
      <Footer />
    </>
  );
}
