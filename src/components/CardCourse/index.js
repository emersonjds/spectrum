import React from "react";
import {
  CourseCard,
  Title,
  Description,
  SeeMoreText,
  ImageCard,
  PriceArea,
  TextPriceArea,
} from "./styles.js";

export default function CardCourse({ dataCourse }) {
  return (
    <>
      <CourseCard>
        <ImageCard src={dataCourse.imgUrl} />
        <PriceArea>R$ {dataCourse.price}</PriceArea>
        <Title>{dataCourse.title}</Title>
        <Description>{dataCourse.description}</Description>
        <SeeMoreText>Ver mais ...</SeeMoreText>
      </CourseCard>
    </>
  );
}
