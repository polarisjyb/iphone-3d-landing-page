import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
`

const moveUp = keyframes`
  100%{
    transform: translateY(0);
  }
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

span{
  position: absolute;
  transform: translateY(3rem);
  animation-name: ${moveUp};
  animation-duration: 2.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  font-family: var(--fontL);
  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const Quotation = () => {
  return (
    <Section>
      <TextContainer>
        <Text>
          <span>
            Sometimes Life is going to hit you in the head with a brick. Don't lose faith.
          </span>
        </Text>
        <Text>
          <span>
            Let's go invent tomorrow rather than worrying about what happened yesterday.
          </span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quotation;