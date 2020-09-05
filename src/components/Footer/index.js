import React from "react";
import "./style.css";
import { Row, Col } from "reactstrap";
import imgFooter from "../../assets/img/img-footer.png";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";

import { ContainerSocial, LineSocial } from "./styles";

export default function Footer() {
  return (
    <div className="footer">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContainerSocial>
            <p style={{ color: "#FFF", fontSize: "1rem", fontWeight: "bold" }}>
              Redes Sociais
            </p>
            <LineSocial>
              <FaLinkedin />
              <span style={{ marginLeft: 10 }}> Spectrum </span>
            </LineSocial>
            <LineSocial>
              <FaFacebook />
              <span style={{ marginLeft: 10 }}> Spectrum </span>
            </LineSocial>
            <LineSocial>
              <FaInstagram />
              <span style={{ marginLeft: 10 }}> Spectrum </span>
            </LineSocial>
          </ContainerSocial>
        </Col>
        <Col
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={imgFooter} alt="" />

          <span style={{ color: "#FFF" }}>
            ©2020 Spectrum. Todos os direitos reservados.
          </span>
        </Col>
        <Col
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "#FFF", fontSize: "1rem", fontWeight: "bold" }}>
            Contatos
          </p>
          <LineSocial>
            <FaWhatsapp />
            <span style={{ marginLeft: 10 }}> 55 011 258756389 </span>
          </LineSocial>
          <LineSocial>
            <FaMailBulk />
            <span style={{ marginLeft: 10 }}> contato@spectrum.com </span>
          </LineSocial>
        </Col>
      </Row>
    </div>
  );
}
