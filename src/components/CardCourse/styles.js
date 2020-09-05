import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 6rem;
`;

export const TitlePage = styled.h3`
  color: #4f4f4f;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.04em;
`;

export const CourseCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 1rem; */
  cursor: pointer;
`;

export const Title = styled.p`
  color: #4f4f4f;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  color: #828282;
  font-size: 1.3rem;
`;

export const Description = styled.p`
  color: #4f4f4f;
  font-size: 0.9rem;
`;

export const District = styled.p`
  color: #828282;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SeeMoreText = styled.p`
  color: #4f4f4f;
  font-weight: bold;
`;

export const ImageCard = styled.img`
  height: 13.5rem;
  width: 100%;
`;

export const PriceArea = styled.div`
  background-color: #9b519a;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: #fff;
  font-weight: bold;
`;

export const TextPriceArea = styled.p`
  color: #fff;
  font-size: 1rem;
`;
