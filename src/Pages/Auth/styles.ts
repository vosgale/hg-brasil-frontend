import styled, { keyframes } from "styled-components";

const softOpacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const AuthFormContainer = styled.div<{ $isLoading: boolean }>`
  display: flex;
  flex-direction: column;
  animation: ${softOpacity} 0.5s ease-in-out;
  gap: 18px;
  align-items: center;
  height:  ${({ $isLoading }) => ($isLoading ? "100px" : "320px")};
  justify-content: center;
  transition: 0.5s ease;
`;

export const FieldsContainer = styled.div`
  margin-top: 22px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 22px;
`;

export const RegisterAccountCTA = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
