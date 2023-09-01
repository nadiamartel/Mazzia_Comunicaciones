const z = require("zod");

const usuarioSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required",
  }),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Email is required",
    })
    .email(),
  password: z.string({
    invalid_type_error: "Password must be a string",
    required_error: "Password is required",
  }),
  // phone: z.string({
  //     invalid_type_error: 'Phone must be a string',
  //     required_error: 'Phone is required'
  // }),
  // client: z.boolean({
  //     invalid_type_error: 'Client must be boolean',
  //     required_error: 'Client is required'
  // }),
  picture: z
    .string({
      invalid_type_error: "Picture must be a string",
    })
    .default("No picture"),
});

const validateUsurario = (input) => {
  return usuarioSchema.safeParse(input);
};

const validateUpdateUsurario = (input) => {
  return usuarioSchema.partial().safeParse(input);
};

module.exports = {
  validateUsurario,
  validateUpdateUsurario,
};
