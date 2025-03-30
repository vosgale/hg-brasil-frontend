import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
  @media(max-width: 500px){
    ::-webkit-scrollbar { display: none; }
  }
}

input,
textarea,
button,
select,
a {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none !important;
    color: inherit; 
}

body{
  position: relative;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.text};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

}

::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background: #101010;
}

::-webkit-scrollbar-thumb {
  background: #555; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 5px;
}
::-webkit-scrollbar-corner {
  background: rgba(0,0,0,0);
}
`;
