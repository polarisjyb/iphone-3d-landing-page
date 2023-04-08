import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model2 from "../assets/3D-Model/Scene2";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 266, 0.8);
  positon: relative;
`

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  positon: relative;
`

const Text = styled.div`
  width: 100%;
  font-size: var(--fontxxl);
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  transform: rotate(-90deg);
  
  z-index: 1;
`

const ColorSection = () => {
  return(
    <Section>
      <Left />
      <Text>Sierra Blue</Text>
      <Right>
      <Canvas camera={{ fov: 14, position: [-0.1, 0.4, 5] }}>
        <ambientLight intensity={1.5}/>
        <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
          <Model2 />
          </Suspense>
          {/* <OrbitControls /> */}
      </Canvas>
      </Right>
    </Section>
  );
};

export default ColorSection;