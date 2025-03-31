import { Dialog } from "@mui/material";
import styled from "styled-components";

export const CustomDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 700px;
    background: #080c1017;
    backdrop-filter: blur(12px);
  }
  .MuiDialogContent-root{
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }
  }
`;

export const DialogInfos = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
h3{
  font-weight: bold;
  font-size: 1.8rem;
}
p{
  display: flex;
  gap: 12px;
  font-size: 0.9rem;
  flex-wrap: wrap;
}
small{
  color: ${({ theme }) => theme.colors.opaqueText};
}
`;

export const DialogChartContainer = styled.div<{ isPositive: boolean }>`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
.MuiAreaElement-root{
  fill:  ${({ isPositive }) => (isPositive ? "#02d5d11c" : "#ff000026")};
}
.MuiLineElement-root {
  stroke:  ${({ isPositive }) => (isPositive ? "#02d5d1" : "#BC3D5D")};
  stroke-width: 2px; 
}
`;
