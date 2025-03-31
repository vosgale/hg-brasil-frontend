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
    width: clamp(400px, 30vw, 400px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
      width: 100%;
      padding: 0 16px;
    }
  }
`;

export const ContentContainer = styled(motion.div)`
  width: clamp(400px, 50vw, 470px);
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0 16px;
  }
`;
