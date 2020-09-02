import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "reactstrap";

export default function Home() {
  return (
    <>
      <Container>
        <Jumbotron>
          <h1 className="display-3">Spectrum</h1>
          <p className="lead">Autistas nas melhores vagas do mercado</p>
          <hr className="my-2" />
          {/* <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p> */}
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </Container>
    </>
  );
}
