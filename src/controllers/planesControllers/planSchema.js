const z = require('zod');

const planSchema = z.object({
    name: z.string({
        invalid_type_error: 'Name must be a string',
        required_error: 'Name is required'
    }),
    price: z.number({
        invalid_type_error: 'Price must be a number',
        required_error: 'Price is required'
    }).positive(),
    speed: z.string({
        invalid_type_error: 'Speed must be a string',
        required_error: 'Speed is required'
    }),
    detail: z.string().default("Sin detalles")
})

const validatePlan = (input) => {
    return planSchema.safeParse(input)
}

const validateUpdatePlan = (input) => {
    return planSchema.partial().safeParse(input)
}

module.exports = {
    validatePlan,
    validateUpdatePlan
}