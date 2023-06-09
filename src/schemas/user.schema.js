import joi from "joi";

export const userSchema = joi.object({
    userName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(3)
});