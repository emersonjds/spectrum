import React from "react";
import NavMenu from "../../components/Nav";
import Footer from "../../components/Footer";

import {
  MainContainer,
  TitlePage,
  ContainerForm,
  TitleContainer,
  LeftContainer,
  RightContainer,
  BoxEnterprise,
  TextContainer,
} from "./styles.js";

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import Image from "react-bootstrap/Image";
import micro from "../../assets/img/enterprises/micro.jpg";
import magalu from "../../assets/img/enterprises/magalu.png";
import vivo from "../../assets/img/enterprises/vivo.jpeg";
import selo from "../../assets/img/Frame.png";

export default function VacancyArea() {
  return (
    <>
      <NavMenu />
      <MainContainer>
        <TitlePage>
          Quer ser uma empresa amiga da neurodiversidade? Cadastre-se
        </TitlePage>

        <Row>
          <Col sm={4}>
            <LeftContainer>
              <Image src={selo} fluid="true" />
              <TitleContainer>Selo para Emprsa</TitleContainer>
              <TextContainer>
                Culpa laboris in fugiat eu deserunt nostrud velit dolore.
                Ullamco cillum consequat consequat pariatur quis dolor mollit
                consectetur dolor veniam amet aliqua. Reprehenderit occaecat sit
                labore officia veniam esse excepteur consequat veniam. In dolor
              </TextContainer>
            </LeftContainer>
          </Col>
          <Col sm={8}>
            <RightContainer>
              <TextContainer>Nome da empresa</TextContainer>
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Escreva aqui o nome da empresa"
                  />
                </FormGroup>
                <TextContainer>Area de atuação</TextContainer>
                <FormGroup>
                  <Input
                    type="text"
                    name="atuation"
                    placeholder="Escreva aqui a área de atuação"
                  />
                </FormGroup>
                <FormGroup>
                  <TextContainer>
                    Voce tem Funcionarios autistas ?!
                  </TextContainer>

                  <Input
                    type="text"
                    name="atuation"
                    placeholder="Se sim, fale-nos um pouco sobre ele(s)"
                  />
                </FormGroup>
                <FormGroup>
                  <TextContainer>
                    Qual o maior interesse nesse cadastro?
                  </TextContainer>

                  <Input
                    type="text"
                    name="atuation"
                    placeholder="Conta pra gente um pouco mais de vocês"
                  />
                </FormGroup>
                <Button color="primary" style={{ marginTop: 20 }}>
                  Finalizar Cadastro
                </Button>{" "}
              </Form>
            </RightContainer>
          </Col>
        </Row>

        <TitlePage>Conheça Empresas que já estão com a gente</TitlePage>
        <Row>
          <Col md={2}>
            <BoxEnterprise>
              <Image src={micro} thumbnail />
            </BoxEnterprise>
          </Col>
          <Col md={2}>
            <BoxEnterprise>
              <Image src={micro} thumbnail />
            </BoxEnterprise>
          </Col>
          <Col md={2}>
            <BoxEnterprise>
              <Image src={micro} thumbnail />
            </BoxEnterprise>
          </Col>
          <Col md={2}>
            <BoxEnterprise>
              <Image src={micro} thumbnail />
            </BoxEnterprise>
          </Col>
        </Row>
      </MainContainer>
      <Footer />
    </>
  );
}
