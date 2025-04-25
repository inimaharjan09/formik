import Product from "../models/Product.js";

export const getProducts= ((req, res) => {
    return res.status(200).json({message: 'getAllProducts'});
});
export const getProduct= ((req, res) => {
    return res.status(200).json({message: 'addProducts'});
});
export const addProducts=async (req,res)=> {
    const {title, description, price, image, category, brand} = req.body;
    
    try{
        await Product.create({
            title,description,price,image,category,brand
        });
        return res.status(200).json({message: 'product added successfully'});

    }catch(err){
        return res.status(200).json({message: `${err}`});
    }
};
export const updateProducts=((req,res)=> {
    return res.status(200).json({message: 'updateProducts'});
});
export const deleteProducts=((req,res)=> {
    return res.status(200).json({message: 'deleteProducts'});
});
