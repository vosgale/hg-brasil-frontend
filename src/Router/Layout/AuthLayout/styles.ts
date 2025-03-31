import { motion } from "framer-motion";
import styled from "styled-components";

export const AuthPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const LogoContainer = styled(motion.div)`
  display: flex;
  font-weight: 900;
  gap: 16px;
  width: fit-content;
  justify-content: start;
  margin-bottom: 16px;
  img {
    width: 20vw;
  }
`;

export const ContentContainer = styled(motion.div)`
  width: 450px;
  position: relative;
`;
