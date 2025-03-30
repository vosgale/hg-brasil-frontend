import { Route, Routes } from "react-router-dom";

import { Finances } from "Pages/Finances";
import GlobalStyles from "styles/global-styles";
import { RenderSystemLayoutOutlet } from "./Layout/SystemLayout";

export function Router() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<RenderSystemLayoutOutlet />}>
          <Route path="/" element={<Finances />} />
        </Route>
        <Route path="/login" element={<p>Login</p>} />
      </Routes>
    </>
  );
}
