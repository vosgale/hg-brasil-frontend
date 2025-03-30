import styled from "styled-components";

export const Card = styled.div`
  background: #111820;
  padding: 16px 22px;
  min-height: 160px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: thin solid transparent;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    border: thin solid ${({ theme }) => theme.colors.primary};
  }
  .typeName {
    font-weight: 300;
    font-size: 0.8rem;
  }
  .content {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    p {
      font-size: 1.8rem;
      font-weight: 600;
    }
    span {
      font-size: 0.7rem;
      color: ${({ theme }) => theme.colors.opaqueText};
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
