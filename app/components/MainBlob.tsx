"use client"

import styled, { keyframes } from "styled-components"

const blobAnimation = keyframes`
  0% {
    border-radius: 50% 50% 40% 60%;
    transform: scale(1) translateY(0);
  }
  25% {
    border-radius: 60% 40% 50% 50%;
    transform: scale(1.05) translateY(-10px);
  }
  50% {
    border-radius: 50% 50% 60% 40%;
    transform: scale(1) translateY(0);
  }
  75% {
    border-radius: 40% 60% 50% 50%;
    transform: scale(0.95) translateY(10px);
  }
  100% {
    border-radius: 50% 50% 40% 60%;
    transform: scale(1) translateY(0);
  }
`

const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0; // light grey background for contrast
`

const AnimatedBlob = styled.div`
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #0a4431, #1e7350);
  animation: ${blobAnimation} 10s ease-in-out infinite;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    );
    animation: ${blobAnimation} 10s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    animation: ${blobAnimation} 10s ease-in-out infinite reverse;
  }
`

const MainBlob: React.FC = () => {
  return (
    <AnimationContainer>
      <AnimatedBlob />
    </AnimationContainer>
  )
}

export default MainBlob
