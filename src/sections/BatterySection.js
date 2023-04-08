import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);

  text-transform: capitalize;
  font-size: var(--fontBig);
  font-family: var(--fontSemiB);
  z-index: 1;
`;


const BatterySection = () => {
  return(
    <Section>
      <Title>Go all day with single charge...</Title>
    </Section>
  );
};

export default BatterySection;