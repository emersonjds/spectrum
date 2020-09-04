import React from "react";

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

export default function CarouselArea() {
  return (
    <Carousel itemsToShow={4}>
      <Item>
        <h4>Professor Particular</h4>
        <p>Casa</p>
        <p>Description</p>
      </Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
      <Item>6</Item>
    </Carousel>
  );
}
