import { Route, Routes } from "react-router-dom";

import { Login } from "Pages/Auth/Login";
import { Register } from "Pages/Auth/Register";
import { Finances } from "Pages/Finances";
import GlobalStyles from "styles/global-styles";
import { RenderAuthLayoutOutlet } from "./Layout/AuthLayout";
import { PrivateRoute } from "./Layout/PrivateRoute";
import { RenderSystemLayoutOutlet } from "./Layout/SystemLayout";

export function Router() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<RenderSystemLayoutOutlet />}>
          <Route path="/" element={<PrivateRoute element={<Finances />} />} />
        </Route>
        <Route element={<RenderAuthLayoutOutlet />}>
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}
