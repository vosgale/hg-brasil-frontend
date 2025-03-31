import { motion } from "framer-motion";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuthStore } from "store/auth-store";

import { IMAGES } from "Assets/Images/Images";
import { containerVariants, fadeInOutVariants, fadeInWithSlideariants } from "./motion-variants";
import { AuthPage, ContentContainer, LogoContainer } from "./styles";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <AuthPage>
      <LogoContainer initial="initial" animate="animate" variants={fadeInOutVariants} transition={{ duration: 1 }}>
        <motion.img
          variants={fadeInWithSlideariants}
          transition={{ duration: 0.5 }}
          src={IMAGES.logo}
          alt="franq logo"
          initial="initial"
          animate="animate"
        />
      </LogoContainer>
      <ContentContainer
        initial="initial"
        animate="animate"
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {children}
      </ContentContainer>
    </AuthPage>
  );
};

export function RenderAuthLayoutOutlet() {
  const element = useOutlet();
  return <AuthLayout>{element}</AuthLayout>;
}
