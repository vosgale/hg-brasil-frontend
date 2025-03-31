import { z } from "zod";

const registerFormValidationSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O e-mail é obrigatório").email("Formato de e-mail inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
    passwordConfirmation: z.string().min(6, "A confirmação de senha deve ter no mínimo 6 caracteres."),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem.",
    path: ["passwordConfirmation"],
  });

export type RegisterFormType = z.infer<typeof registerFormValidationSchema>;
export default registerFormValidationSchema;
