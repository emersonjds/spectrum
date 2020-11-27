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
              <Subtitle>Matemática</Subtitle>
              <Description>
                Ira atuar junto a equipe de desenvolvimento com clientes como
                Magalu, Itau, Santander. Trabalho 100% remoto, prioridade para
                autistas
              </Description>

              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Desenvolvedor <br /> Flutter
              </Title>
              <Subtitle>
                Desenvolvimento de aplicativos multiplataforma
              </Subtitle>
              <Description>
                Ira atuar junto a equipe de desenvolvimento com clientes como
                Magalu, Itau, Santander. Trabalho 100% remoto, prioridade para
                autistas
              </Description>
              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Analista de <br /> Contabilidade
              </Title>
              <Subtitle>
                Ira atuar na area portuária junto ao porto de Santos
              </Subtitle>
              <Description>
                Analise de balanço e dados para industria naval e portuaria,
                balancete e analise exploratoria de dados
              </Description>
              <District>SP, Sao Paulo</District>
            </VacancyCard>
          </Col>
          <Col md={3}>
            <VacancyCard>
              <Title>
                Instrutor
                <br /> Mobile
              </Title>
              <Subtitle>Flutter, React Native, Android</Subtitle>
              <Description>
                Ira atuar na construção de aulas para plataforma web de ensino a
                distancia podendo fazer monitoria com alunos. 100% remoto.
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
