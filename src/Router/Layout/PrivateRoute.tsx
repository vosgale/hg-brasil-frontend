import { Navigate } from "react-router-dom";
import { useAuthStore } from "store/auth-store";

const isAuthenticated = () => {
  const { token, logout, isAuthenticated } = useAuthStore();
  if (token && isAuthenticated) {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp * 1000 < Date.now()) {
      logout();
      return false;
    }
    return true;
  }
  return false;
};

export function PrivateRoute({ element }: { element: React.ReactNode }) {
  return isAuthenticated() ? <>{element}</> : <Navigate to="/login" />;
}
