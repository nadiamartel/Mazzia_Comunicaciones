import z from "zod";

const consultaSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es un campo obligatorio",
    })
    .min(3, { message: "El nombre debe tener un minimo de 4 caracteres" })
    .max(25, { message: "El nombre debe tener un maximo de 15 caracteres" }),
  phone: z
    .string({
      required_error: "Numero de contacto es un campo obligatorio",
    })
   .min(9, {message: "El numero debe ser un numero valido"}).max(14,{message: "El numero debe ser un numero valido"}),
  email: z
    .string({
      required_error: "Email es un campo obligatorio",
      invalid_type_error: "Ingrese un email"
    })
    .email({message: "Ingrese un email valido"}),
  message: z.string({
    required_error: "El mensaje es un campo obligatorio",
  }).min(1, {message: "El mensaje es un campo obligatorio" }),
});

export const validateConsulta = (input) => {
  return consultaSchema.safeParse(input);
};
