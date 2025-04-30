import mongoose from "mongoose";
import Product from "../models/Product.js";

export const checkId = async   (req, res, next)=> {
    const { id} = req.params;
    if(!mongoose.isValidObjectId(id)) return res.status(400).json({
        message: 'invalid product id'
    });
    const isExist = await Product.findById(id);
    if(!isExist) return res.status(404).json({
        message: 'product not found'
    });

    req.product = isExist;

    next();
}