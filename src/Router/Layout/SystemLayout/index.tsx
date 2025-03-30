import useScrollTopLimit from "hooks/useScrollTopLimit";
import { useRef } from "react";
import { useOutlet } from "react-router-dom";
import { useAuthStore } from "store/auth-store";

import { Avatar, Stack } from "@mui/material";
import { IMAGES } from "Assets/Images/Images";
import { ChildrenContainer, PageContent, PageHeader } from "./styles";

const SystemLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAtTop = useScrollTopLimit(scrollRef);
  const { isAuthenticated } = useAuthStore();

  return (
    <PageContent>
      <PageHeader $isAtTop={isAtTop}>
        <img src={IMAGES.logo} alt="logotipo" />
        <Stack direction="row" alignItems="center" gap="12px">
          Bem vindo, Fernando <Avatar>F</Avatar>
        </Stack>
      </PageHeader>
      <ChildrenContainer>{children}</ChildrenContainer>
    </PageContent>
  );
};

export function RenderSystemLayoutOutlet() {
  const element = useOutlet();

  return <SystemLayout>{element}</SystemLayout>;
}
