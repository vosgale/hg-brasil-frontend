import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A0E10",
    },
    primary: {
      main: "#687bea",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
});
