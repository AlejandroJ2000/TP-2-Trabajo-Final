import Joi from "joi";

export const validateProduct = (product) => {
    const productSchema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(5).max(255).required(),
        price: Joi.number().integer().min(0).required(),
        stock: Joi.number().integer().min(0).required(),
        category: Joi.string().min(1).max(40).required()
    });

    const { error } = productSchema.validate(product);
    return error ? error.details[0].message : null;
}

export const validateUser = (user) => {
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().max(100).required(),
        password: Joi.string().min(8).max(30).required(),
        phoneNumber: Joi.string().min(6).max(20),
        address: Joi.object({
            street: Joi.string().min(4).max(50),
            city: Joi.string().min(3).max(50),
            postalCode: Joi.string().min(1).max(20),
            country: Joi.string().min(3).max(45),
        }),
        purchaseHistory: Joi.array().items(Joi.object()).default([]),
        cart: Joi.array().items(Joi.object()).default([]),
        premiumSubscribed: Joi.boolean(),
        role: Joi.string().valid("customer", "admin").default("customer"),
        verificationStatus: Joi.boolean()
    });

    const { error } = userSchema.validate(user);
    return error ? error.details[0].message : null;
}