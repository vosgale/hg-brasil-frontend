import useScrollTopLimit from "hooks/useScrollTopLimit";
import { useRef } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuthStore } from "store/auth-store";

import { IMAGES } from "Assets/Images/Images";
import { UserMenu } from "./Components/Menu";
import { ChildrenContainer, PageContent, PageHeader } from "./styles";

const SystemLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAtTop = useScrollTopLimit(scrollRef);
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <PageContent>
      <PageHeader $isAtTop={isAtTop}>
        <img className="desktop-logo" src={IMAGES.logo} alt="logotipo" />
        <img className="mobile-logo" src={IMAGES.mobileLogo} alt="logotipo" />
        <UserMenu />
      </PageHeader>
      <ChildrenContainer>{children}</ChildrenContainer>
    </PageContent>
  );
};

export function RenderSystemLayoutOutlet() {
  const element = useOutlet();

  return <SystemLayout>{element}</SystemLayout>;
}
