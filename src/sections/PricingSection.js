import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

import Model3 from '../assets/3D-Model/Scene3';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: "#9BB5CE";
`;

const PricinigSection = () => {
  return (
    <Container>
      <Section>
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>

          <Environment preset="night" />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Section>
    </Container>
  );
};

export default PricinigSection;