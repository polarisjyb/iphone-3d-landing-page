import React from "react";
import styled from "styled-components";

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

const Quotation = () => {
  return (
    <Section>
      <TextContainer>
        <span>
          Sometimes Life is going to hit you in the head with a brick. Don't lose faith.
        </span>
        <span>
          Let's go invent tomorrow rather than worrying about what happened yesterday.
        </span>
      </TextContainer>
    </Section>
  );
};

export default Quotation;