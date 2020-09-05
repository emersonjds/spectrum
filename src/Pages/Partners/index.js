import React from "react";
import NavEnterprise from "../../components/NavEnterprise";
import Footer from "../../components/Footer";

import {
  MainContainer,
  ContainerPartner,
  ImageContainer,
  TextPartner,
  ContainerCreateVacancy,
  ContainerCouseLive,
  ImageContainerCourse,
  TitleContainerCourse,
  SubtitleContainerCourse,
} from "./styles";
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
import Section from "../../components/Section";
import CarouselArea from "../../components/Carrousel";

import frame from "../../assets/img/Frame.png";
import course from "../../assets/img/courseLive.png";

export default function Partners() {
  return (
    <>
      <NavEnterprise />
      <MainContainer>
        <div style={{ marginBottom: 20 }}>
          <Row>
            <Col
              md={6}
              style={{
                display: "flex",
                alignItem: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <ImageContainer src={frame} />
            </Col>
            <Col
              md={6}
              style={{
                display: "flex",
                alignItem: "center",
                justifyContent: "flex-start",
              }}
            >
              <TextPartner>Fala parceiro</TextPartner>
            </Col>
          </Row>
        </div>

        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Cadastrar nova vaga
        </p>
        <Row>
          <Col md={6}>
            <ContainerCreateVacancy>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Título da vaga</Label>
                  <Input
                    type="text"
                    name="email"
                    id="exampleEmail"
                    placeholder="titulo da vaga"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Local</Label>
                  <Input
                    type="text"
                    name="email"
                    id="exampleEmail"
                    placeholder="endereco , cidade"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Mais especificações</Label>
                  <Input
                    type="text"
                    name="email"
                    id="exampleEmail"
                    placeholder="Informe detalhes sobre essa vaga"
                  />
                </FormGroup>
                <Button color="primary">Cadastrar Vaga</Button>
              </Form>
            </ContainerCreateVacancy>
          </Col>
        </Row>
        <Section>
          <Row>
            <Col md={6}>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                Suas Ultimas vagas Cadastradas
              </p>
            </Col>
          </Row>
          <CarouselArea />
        </Section>

        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Proximo Curso ao Vivo
        </p>
        <ContainerCouseLive>
          <Row>
            <Col
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageContainerCourse src={course} />
            </Col>
            <Col md={6}>
              <TitleContainerCourse>
                Vantagens de contratar um autista
              </TitleContainerCourse>
              <SubtitleContainerCourse>
                Com o professor Juliano Flores
                <br />
                <br />
                Você já ouviu falar de hiperfoco? O hiperfoco pode ser definido
                como uma forma intensa de concentração em um mesmo assunto,
                tópico ou tarefa e é bastante frequente em pessoas com
                transtorno do espectro autista (TEA). Ele pode ser extremamente
                benéfico em empresas, já que possibilita que o profissional
                preste bastante atenção em assuntos que lhe interessam durante o
                tempo de trabalho.
              </SubtitleContainerCourse>
            </Col>
          </Row>
        </ContainerCouseLive>
      </MainContainer>
      <Footer />
    </>
  );
}
