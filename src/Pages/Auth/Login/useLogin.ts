import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "store/auth-store";
import type { loginFormType } from "./validation-schema";

export const useLogin = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitLogin = (data: loginFormType) => {
    setIsLoading(true);

    setTimeout(() => {
      const storedUsers = localStorage.getItem("@users");
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const user = users.find((user: { email: string; name: string; password: string }) => user.email === data.email);

      if (!user) {
        toast.error("Erro: Usuário não encontrado!", {
          position: "top-right",
          autoClose: 2000,
        });
        setIsLoading(false);
        return;
      }

      if (user.password !== data.password) {
        toast.error("Erro: Senha incorreta!", {
          position: "top-right",
          autoClose: 2000,
        });
        setIsLoading(false);
        return;
      }

      const payload = {
        email: user.email,
        userName: user.name,
        exp: Math.floor(Date.now() / 1000) + 3600,
      };
      const token = btoa(JSON.stringify(payload));

      login({ email: user.email, name: user.name, token });
      navigate("/");
      toast.success("Login efetuado: Bem vindo!", {
        position: "top-right",
        autoClose: 2000,
      });

      setIsLoading(false);
    }, 2000);
  };

  return {
    handleSubmitLogin,
    isLoading,
  };
};
