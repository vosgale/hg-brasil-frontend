import { zodResolver } from "@hookform/resolvers/zod";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import PasswordInput from "Components/PasswordInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthFormContainer, FieldsContainer } from "../styles";
import { useRegister } from "./useRegister";
import type { RegisterFormType } from "./validation-schema";
import registerFormValidationSchema from "./validation-schema";
export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormValidationSchema),
  });

  const { handleSubmitLogin, isLoading } = useRegister();
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
                label="Nome"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name")}
              />
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
              <PasswordInput
                size="small"
                label="Confirmar senha"
                {...register("passwordConfirmation")}
                error={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation?.message}
              />
            </FieldsContainer>
            <Stack direction="row" alignItems="center" justifyContent="end" width="100%" gap="12px">
              <Button variant="text" onClick={() => navigate("/login")}>
                Voltar
              </Button>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Stack>
          </>
        )}
      </AuthFormContainer>
    </form>
  );
};
