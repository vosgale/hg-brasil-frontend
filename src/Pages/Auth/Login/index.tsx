import { zodResolver } from "@hookform/resolvers/zod";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import PasswordInput from "Components/PasswordInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthFormContainer, FieldsContainer, RegisterAccountCTA } from "../styles";
import { useLogin } from "./useLogin";
import type { loginFormType } from "./validation-schema";
import loginFormValidationSchema from "./validation-schema";
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>({
    resolver: zodResolver(loginFormValidationSchema),
  });

  const { handleSubmitLogin, isLoading } = useLogin();
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <AuthFormContainer $isLoading={isLoading}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <FieldsContainer>
              <TextField
                size="small"
                label="E-mail"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <PasswordInput
                size="small"
                label="Senha"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />

              <Button variant="contained" type="submit" fullWidth>
                LOGIN
              </Button>
            </FieldsContainer>
            <RegisterAccountCTA>
              <Typography variant="body1">Não tem uma conta ? </Typography>
              <Button variant="text" onClick={() => navigate("/cadastro")}>
                Cadastre-se
              </Button>
            </RegisterAccountCTA>
          </>
        )}
      </AuthFormContainer>
    </form>
  );
};
