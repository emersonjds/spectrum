import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "../../components/Section";
import "./style.css";
import { Link } from "react-router-dom";
import CarouselArea from "../../components/Carrousel";
import Footer from "../../components/Footer";
import mainImg from "../../assets/img/main.png";
import NavMenu from "../../components/Nav";
import CardComponent from "../../components/Card";
import officeImg from "../../assets/img/office.png";
import partner_1 from "../../assets/img/partner.png";
import partner from "../../assets/img/friendlyPartner.png";

import {
  BoxParner,
  BoxImage,
  InternalBox,
  BoxText,
  BoxTextTitle,
  BoxTextSubtitle,
  BoxTextLink,
} from "./styles.js";

export default function Landing() {
  return (
    <>
      <NavMenu />
      <Container>
        <Section bkgColor={"#BDA687"}>
          <Container>
            <Row>
              <Col
                md={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={mainImg} alt="imagem vaga" fluid height="100%" />
              </Col>
              <Col
                md={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
          <CarouselArea />
        </Section>

        <Section>
          <Row>
            <Col md={6}>
              <BoxParner>
                <InternalBox>
                  <BoxImage>
                    <img src={partner_1} alt="" />
                  </BoxImage>
                  <BoxText>
                    <BoxTextTitle>Selo para empresas</BoxTextTitle>
                    <BoxTextSubtitle>
                      Cursos, palestras, instruções, dúvidas e diversos assuntos
                      conversando com autistas de várias áreas de atuação
                    </BoxTextSubtitle>
                    <BoxTextLink>Ver mais...</BoxTextLink>
                  </BoxText>
                </InternalBox>
              </BoxParner>
            </Col>
            <Col md={6}>
              <BoxParner>
                <InternalBox>
                  <BoxImage>
                    <img src={partner} alt="" />
                  </BoxImage>
                  <BoxText>
                    <BoxTextTitle>Selo para parceiros</BoxTextTitle>
                    <BoxTextSubtitle>
                      Quer interagir mais com pessoas autistas e não sabe como?
                      Que tal oferecer um curso da sua área?
                    </BoxTextSubtitle>
                    <BoxTextLink>Ver mais...</BoxTextLink>
                  </BoxText>
                </InternalBox>
              </BoxParner>
            </Col>
          </Row>
        </Section>
        <h3>Cursos Disponiveis</h3>
        <Section>
          <Row>
            <Col md={4}>
              <CardComponent imgCard={officeImg} />
            </Col>
            <Col md={4}>
              <CardComponent imgCard={officeImg} />
            </Col>
            <Col md={4}>
              <CardComponent imgCard={officeImg} />
            </Col>
          </Row>
        </Section>
      </Container>
      <Footer />
    </>
  );
}
