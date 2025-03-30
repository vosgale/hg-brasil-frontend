import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
  gap: 22px;
  padding: 22px 0;
`;

export const FinanceVariation = styled.p<{ isPositive: boolean }>`
  font-weight: 500;
  color: ${({ isPositive }) => (isPositive ? "#DCFF79" : "#BC3D5D")};
`;
