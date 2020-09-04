import React, { Component } from "react";
import "./style.css";
import { Row, Col } from "reactstrap";
import imgFooter from "../../assets/img/img-footer.png";

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <img src={imgFooter} alt="" />
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
