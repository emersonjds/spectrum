import React, { Component } from "react";
import NavProfile from "../../components/NavProfile";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import CarouselArea from "../../components/Carrousel";

import {
  MainContainer,
  TextCourses,
  ContainerCourse,
  ImageContainer,
  TitleContainerCourse,
  SubtitleContainerCouse,
  DescriptionContainerCouse,
  ContainerTextCourse,
} from "./styles.js";

import { Row, Col } from "reactstrap";
import img from "../../assets/img/imageCourseContainer.png";

export default function Profile() {
  return (
    <>
      <NavProfile />
      <MainContainer>
        <Row>
          <Col md={6}>
            <TextCourses>Meus Cursos</TextCourses>
          </Col>
        </Row>

        <Row>
          <Col md={10}>
            <ContainerCourse>
              <ImageContainer src={img} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <TitleContainerCourse>
                  Como falar em público
                </TitleContainerCourse>
                <SubtitleContainerCouse>
                  Um curso da professora Renata Lis
                </SubtitleContainerCouse>
                <p>
                  Conheça seu público. Saber para quem você fala deve ser um dos
                  primeiros passos na hora de montar sua apresentação. ...
                  Conheça a si mesmo. ... Trace um roteiro. ... Ensaie. ...
                  Domine o conteúdo. ... Ferramentas de suporte. ... Prepare-se
                  para o inesperado. ... Seja flexível.
                </p>
              </div>
            </ContainerCourse>
          </Col>
        </Row>

        <Section>
          <Row>
            <Col md={6}>
              <TextCourses>
                Utlimas vagas abertas de acordo com sua pesquisa
              </TextCourses>
            </Col>
          </Row>
          <CarouselArea />
        </Section>
      </MainContainer>
      <Footer />
    </>
  );
}
