const z = require('zod');

const consultaSchema = z.object({
    name: z.string({
        invalid_type_error: 'Name must be a string',
        required_error: 'Name is required'
    }),
    phone: z.string({
        invalid_type_error: 'Phone must be a string',
        required_error: 'Phone is required'
    }).max(15),
    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required'
    }).email(),
    message: z.string({
        invalid_type_error: 'Message must be a string',
        required_error: 'Message is required'
    })
});

const validateConsulta = (input) => {
    return consultaSchema.safeParse(input)
}

module.exports = {
    validateConsulta
}