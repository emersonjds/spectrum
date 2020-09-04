import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "../../components/Section";
import "./style.css";
import { Link } from "react-router-dom";
import CarouselArea from "../../components/Carrousel";
import Footer from "../../components/Footer";
import mainImg from "../../assets/img/main.png";
import NavMenu from "../../components/Nav";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
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
      </Container>
      <Footer />
    </>
  );
}
