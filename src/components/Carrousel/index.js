import React, { useState } from "react";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { newVacancies } from "../../mock";

import VacancyCard from "../CardVacancy";

export default function CarouselArea() {
  return (
    <>
      <Carousel itemsToShow={4} style={{ marginBottom: 25 }}>
        {newVacancies.map((vacancy) => (
          <Item>
            <VacancyCard vacancie={vacancy} />
          </Item>
        ))}
      </Carousel>
    </>
  );
}
