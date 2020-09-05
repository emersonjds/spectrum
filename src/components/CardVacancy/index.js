import React from "react";
import {
  VacancyCard,
  Title,
  Subtitle,
  Description,
  District,
} from "./styles.js";

export default function CardVacancy({ vacancie }) {
  return (
    <>
      <VacancyCard>
        <Title>{vacancie.titleVacancy}</Title>
        <Subtitle>{vacancie.sector}</Subtitle>
        <Description>{vacancie.description}</Description>
        <District>{vacancie.district}</District>
      </VacancyCard>
    </>
  );
}
