import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ModelContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 2;
  background-color: transparent;
`

const Model = () => {
  return (
    <ModelContainer>
      <Canvas>
        <OrbitControls />
        <mesh>
          <boxGeometry />
        </mesh>
      </Canvas>
    </ModelContainer>
  );
};

export default Model;