import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "store/auth-store";
import type { RegisterFormType } from "./validation-schema";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const generateFakeToken = (email: string, name: string) => {
    const payload = {
      email,
      userName: name,
      exp: Math.floor(Date.now() / 1000) + 3600,
    };
    return btoa(JSON.stringify(payload));
  };

  const handleSubmitLogin = (data: RegisterFormType) => {
    setIsLoading(true);

    setTimeout(() => {
      const storedUsers = localStorage.getItem("@users");
      const users: Partial<RegisterFormType>[] = storedUsers ? JSON.parse(storedUsers) : [];

      const userExists = users.some((user) => user.email === data.email);

      if (userExists) {
        console.error("Erro: Email já cadastrado!");
        setIsLoading(false);
        return;
      }

      users.push({
        email: data.email,
        name: data.name,
        password: data.password,
      });
      localStorage.setItem("@users", JSON.stringify(users));

      const token = generateFakeToken(data.email, data.name);

      setIsLoading(false);

      login({ email: data.email, name: data.name, token: token });
      navigate("/dashboard");
    }, 2000);
  };

  return {
    handleSubmitLogin,
    isLoading,
  };
};
