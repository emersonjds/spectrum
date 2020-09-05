import React from "react";
import { Row, Col } from "reactstrap";

import {
  VacancyCard,
  Title,
  Subtitle,
  Description,
  District,
  MainContainer,
  TitlePage,
} from "./styles.js";

import Footer from "../../components/Footer";

import NavMenu from "../../components/Nav";

export default function Opportunities() {
  return (
    <>
      <NavMenu />
      <MainContainer>
        <TitlePage>Oportunidades abertas</TitlePage>
        <Row>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Professor <br /> particular
              </Title>
              <Subtitle>
                Nisi minim mollit eiusmod nulla id consequat occaecat.
              </Subtitle>
              <Description>
                Sint magna ullamco dolore ullamco velit incididunt minim labore.
                Irure in nostrud eu irure incididunt. Fugiat minim mollit minim
                culpa sit reprehenderit fugiat adipisicing.
              </Description>
              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Professor <br /> particular
              </Title>
              <Subtitle>
                Nisi minim mollit eiusmod nulla id consequat occaecat.
              </Subtitle>
              <Description>
                Sint magna ullamco dolore ullamco velit incididunt minim labore.
                Irure in nostrud eu irure incididunt. Fugiat minim mollit minim
                culpa sit reprehenderit fugiat adipisicing.
              </Description>
              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Professor <br /> particular
              </Title>
              <Subtitle>
                Nisi minim mollit eiusmod nulla id consequat occaecat.
              </Subtitle>
              <Description>
                Sint magna ullamco dolore ullamco velit incididunt minim labore.
                Irure in nostrud eu irure incididunt. Fugiat minim mollit minim
                culpa sit reprehenderit fugiat adipisicing.
              </Description>
              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Professor <br /> particular
              </Title>
              <Subtitle>
                Nisi minim mollit eiusmod nulla id consequat occaecat.
              </Subtitle>
              <Description>
                Sint magna ullamco dolore ullamco velit incididunt minim labore.
                Irure in nostrud eu irure incididunt. Fugiat minim mollit minim
                culpa sit reprehenderit fugiat adipisicing.
              </Description>
              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
        </Row>
      </MainContainer>

      <Footer />
    </>
  );
}
