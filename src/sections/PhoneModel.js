import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

import Model from "../assets/3D-Model/Scene";

const ModelContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`

const PhoneModel = () => {
  return (
    <ModelContainer>
      <Canvas camera={{fov: 20}}>
        <ambientLight intensity={1.5}/>
        <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <Environment preset="night" />
      </Canvas>
    </ModelContainer>
  );
};

export default PhoneModel;