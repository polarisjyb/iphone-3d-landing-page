import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../assets/3D-Model/Scene";

const ModelContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 2;
  background-color: transparent;
`

const PhoneModel = () => {
  return (
    <ModelContainer>
      <Canvas>
        <ambientLight intensity={1.5}/>
        <directionalLight intensity={0.5} />
          <Model />
          <Environment preset="night" />
          <OrbitControls />
      </Canvas>
    </ModelContainer>
  );
};

export default PhoneModel;