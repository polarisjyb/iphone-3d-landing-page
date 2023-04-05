import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--white);
  overflow: hidden;
`

const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);

  span{
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitlize;
  }
`
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);

  span{
    font-size: var(--fontxxxl);
    width: 45%;
    font-weight: 600;
    text-transform: capitlize;
  }
`


const PhraseSection = () => {
  return (
    <Section>
      <TextContainer>
        <span>There may be distressing events, but no such thing as failure.</span>
      </TextContainer>
      <TextContainer2>
        <span>Love what you have.</span>
      </TextContainer2>
    </Section>
  );
};

export default PhraseSection;