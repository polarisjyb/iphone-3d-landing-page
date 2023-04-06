import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  height: 200vh;
  position: relative;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
  }

  & > *:nth-child(odd) {
    margin-left: 4rem;
  }
`

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TextBlockRight = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const TextBlockLeft = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.div`
  font-size: var(--fontxl);
  margin-bottom: 1rem;
`

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  margin-bottom: 0.5rem;
  width: 55%;
`

const TextContainer = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-20deg);
  margin-bottom: 4rem;
`

const MovingText = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);

  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`


const DisplaySection = () => {
  return(
    <Section>
      <MainTitle>
        Immersive <br /> Display
      </MainTitle>
      <TextBlockRight>
        <Title>Super Ratine XDR Display</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus dignissimos ipsam.
        </Text>
      </TextBlockRight>
      <TextBlockLeft>
        <Title>Big is better</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus dignissimos ipsam.
        </Text>
      </TextBlockLeft>
      <TextContainer>
        <MovingText>Tougher then ever!</MovingText>
        <MovingText>Every touch matters.</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;