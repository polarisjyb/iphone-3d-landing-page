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
  width: 100%;
  height: var(--fontmd);
  
  font-size: var(--fontlg);
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  span{
    position: absolute;
    transform: translateY(4rem);
    animation-name: ${moveUp};
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author{
    padding-top: 1rem;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
    font-family: var(--fontR);
  }
`

const Quotation = () => {
  return (
    <Section>
      <TextContainer>
        <Text>
          <span>
            &#8220; Sometimes Life is going to hit you in the head with a brick. Don't lose faith. &#8221;
          </span>
        </Text>
        <Text>
          <span>
            &#8220; Let's go invent tomorrow rather than worrying about what happened yesterday. &#8221;
          </span>
        </Text>
        <Text>
          <span className='author'> &#x23AF; Steve Jobs</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quotation;