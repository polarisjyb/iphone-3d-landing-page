import gsap from "gsap";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useLayoutEffect, useContext } from "react";
import { ColorContext } from "./../context/ColorContext";

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
  position: relative;
`
const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(155, 181, 206, 0.4);
  position: relative;
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
  filter: brightness(0.85);
`

const ColorSection = () => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const textRef = useRef(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);
  
  useEffect(() => {
    let rightElem = rightRef.current;
    let leftElem = leftRef.current;
    let textElem = textRef.current;

    textElem.innerText = currentColor.text;
    textElem.style.color = currentColor.color;

    rightElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    leftElem.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

    let updateColor = (color, text, rgbColor) => {
      const colorObj = {
        color,
        text,
        rgbColor,
      };
      changeColorContext(colorObj);
    };

    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `+=${Elem.offsetWidth + 1000}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `+=${Elem.offsetWidth + 1000}`,
          scrub: 1,
        },
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#574f6f", "Deep Purple", "87, 79, 111"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#A50011", "Red", "165, 0, 17"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#A50011", "Red", "165, 0, 17"],
      })
      .to(Elem, {
        onStart: updateColor,
        onStartParams: ["#215E7C", "Blue", "33, 94, 124"],
        onReverseComplete: updateColor,
        onReverseCompleteParams: ["#215E7C", "Blue", "33, 94, 124"],
      });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef} />
      <Text ref={textRef} />
      <Right ref={rightRef}>
        <Canvas camera={{ fov: 14, position: [-0.1, 0.4, 5] }}>
          <ambientLight intensity={1.5} />
          <directionalLight intensity={0.5} />
          <Suspense fallback={null}>
            <Model2 />
          </Suspense>
        </Canvas>
      </Right>
    </Section>
  );
};

export default ColorSection;