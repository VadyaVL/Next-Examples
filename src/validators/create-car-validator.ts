import Joi from 'joi';

export const CreateCarValidator = Joi.object({
    brand: Joi.string()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .required(),
    year: Joi.number()
        .min(1990)
        .max(2024)
        .required(),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .required(),
});
