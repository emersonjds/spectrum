import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import CardCourse from "../CardCourse";

const CardComponent = ({ card }) => {
  return (
    <>
      <CardCourse dataCourse={card} />
    </>
  );
};

export default CardComponent;
