import React from "react";
import styled from "styled-components";
import v1 from "../assets/video/Scuba Diving - 699.mp4";
import v2 from "../assets/video/Skate - 49791.mp4";

const Section = styled.div`
  width: 100vw;
  minheight: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
`

const V1 = styled.video`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`

const V2 = styled.video`
  position: absolute;
  top:0;
  right: 40%;
  width: 60%;
  height: auto;

  z-index: 2;
`

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 2;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }
`

const Title = styled.h1`
  font-size: var(--fontBig);
  text-transform: capitalize;
`

const CameraSection = () => {
  return(
    <Section>
      <V1 src={v1} type="video/mp4" autoPlay muted loop />
      <V2 src={v2} type="video/mp4" autoPlay muted loop />
      <TitleContainer>
        <Title>test1</Title>
        <Title>test2</Title>
        <Title>test3</Title>
      </TitleContainer>
    </Section>
  );
};

export default CameraSection;