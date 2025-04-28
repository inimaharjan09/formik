
import mongoose from "mongoose";
export const categories=["Men's clothing", "Women's clothing", "Jewelery"];
export const brands= ["Apple", "Samsung", "Oppo", "Google"];



const productSchema= new mongoose.Schema({
    title: {
        type: String,
        minLength: [10,'please provide minimum 10 characters'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: String
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: categories,
        required: true

    },
    brand:{
        type: String,
        enum: brands,
        required: true
    }
}, {timestamps: true });

const Product= mongoose.model('Product', productSchema);

export default Product;