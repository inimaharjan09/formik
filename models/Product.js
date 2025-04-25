
import mongoose from "mongoose";

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
    category: {
        type: String,
        enum: ["Men's clothing", "Women's clothing", "Jewelery"],
        required: true

    },
    brand:{
        type: String,
        enum:["Apple", "Samsung", "Oppo", "Google"],
        required: true
    }
});

const Product= mongoose.model('Product', productSchema);

export default Product;