import { BrowserRouter } from "react-router-dom";
import { Slide } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import dark from "./styles/themes/dark";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { muiTheme } from "styles/themes/mui-theme";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <ThemeProvider theme={dark}>
      <MuiThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
            <ToastContainer transition={Slide} theme="dark" autoClose={2000} />
          </BrowserRouter>
        </QueryClientProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
