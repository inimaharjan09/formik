import Joi from "joi";
import { brands, categories } from "../models/Product.js";

export const productValSchema = Joi.object({
    title: Joi.string().min(10).required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    rating: Joi.number(),
    category: Joi.string().valid(...categories).required(),
    brand: Joi.string().valid(...brands).required()
});