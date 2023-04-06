import React from "react";
import styled, { keyframes } from "styled-components";
import a15 from "../assets/Images/A15-Bionic.jpg";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: cetner;

  background-color: var(--dark);
  color: var(--white);
`

const Title = styled.div`
  width: 100%;
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-self: flex-end;

  font-size: var(--fontBig);
  font-family: var(--fontR);
  z-index: 1;

  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Glow = keyframes`
  0%{
    box-shadow: 1px 1px 10px var(--white);
  }
  50%{
    box-shadow: 2px 2px 25px var(--white);
  }
  100%{
    box-shadow: 1px 1px 10px var(--white);
  }
`
const Processor = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // animation: ${Glow} 3s ease infinite;
  // padding: 0.5rem;

  img {
    width: 100%;
    height: auto;
    animation: ${Glow} 3s ease infinite;
    padding: 0.5rem;
  }
`

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 100vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }
`

const ProcessorSection = () => {
  return (
    <Section>
      <Title>
        Fastest Processor
      </Title>
      <Text>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit numquam quae nisi, dolore cum voluptatem cumque quo sit,
          consequuntur necessitatibus iste fuga assumenda deserunt aut omnis,
          quaerat aliquid optio veniam.
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit numquam quae nisi, dolore cum voluptatem cumque quo sit,
          consequuntur necessitatibus iste fuga assumenda deserunt aut.
        </span>
      </Text>
      <Processor>
        <img src={a15} alt="A15 processor" />
      </Processor>
    </Section>
  );
};

export default ProcessorSection;