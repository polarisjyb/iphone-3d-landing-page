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

`

const Quotation = () => {
  return (
    <Section>
      Sometimes Life is going to hit you in the head with a brick. Don't lose faith.
      <br></br>
      Let's go invent tomorrow rather than worrying about what happened yesterday.
    </Section>

  );
};

export default Quotation;