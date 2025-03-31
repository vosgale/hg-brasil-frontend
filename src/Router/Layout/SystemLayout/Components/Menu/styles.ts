import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  gap: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .welcome-text {
      display: none;
    }
  }
`;
