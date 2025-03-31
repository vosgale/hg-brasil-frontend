import styled from "styled-components";

export const PageContent = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 6vh 90px;
  max-width: 1840px;
  overflow: visible;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 6vh 32px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.ultraMobile}) {
    padding: 6vh 6px 0;
  }
`;

export const PageHeader = styled.header<{ $isAtTop: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 1rem;
  align-items: center;
  border-radius: 8px;
  z-index: 10;
  background-color: ${({ $isAtTop }) => ($isAtTop ? "" : "#8056b614")};
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  margin-bottom: 12vh;

  .desktop-logo {
    width: 216px;
  }
  .mobile-logo {
    display: none;
  }

  h6 {
    font-size: 1.9rem;
    font-weight: 600;
  }
  .mobile-menu-button {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .mobile-menu-button {
      display: flex;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .desktop-logo {
      display: none;
    }
    .mobile-logo {
      width: 40px;
      display: block;
    }
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  height: 100%;
`;
