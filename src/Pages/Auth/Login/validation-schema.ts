import { z } from "zod";

const loginFormValidationSchema = z.object({
  email: z.string().email("Endereço de e-mail inválido"),
  password: z.string().min(6, "Insira a senha"),
});

export type loginFormType = z.infer<typeof loginFormValidationSchema>;
export default loginFormValidationSchema;
