
import Product, { brands, categories } from "../models/Product.js";

// Get all products
export const getProducts = async (req, res) => {
    try { 
        const queryObject = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit', 'fields', 'skip', 'search']

        excludeFields.forEach((label) => delete queryObject[label])
        delete queryObject['sort'];
        // let qryStr = JSON.stringify(queryObject);
    
        // console.log(qryStr.replace(/\b(gte|gt|lte|lt|eq)\b/g, match => `$${match}`))
        // console.log(queryObject);
        // {rating: {$gt: 4}}

        if(req.query.search){
            //queryObject.title={ $refwx: req.query.search, $options: i};
            const searchText = req.query.search;
            if(categories.includes(searchText)){
                queryObject.category = { $regex: searchText, $options: 'i'};
            }
            else if (brands.includes(searchText)){
            queryObject.brand = {$regex: searchText, $options: 'i'};
            }else{
            queryObject.title={$regex: searchText, $options: 'i'};
            }
            }
        
        let query = Product.find(queryObject);
    
        if (req.query.sort) {
            //console.log(req.query.sort.split(',').join(' '));
            const sorting= req.query.sort.split(/[/s,]+/).filter(Boolean).join(' ');
          query.sort(sorting);
        }

        if (req.query.fields) {
            const selects = req.query.fields.split(/[\s,]+/).filter(Boolean).join(' ');
            query.select(selects);
        }

        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page -1) *10;

        const products = await query.skip(skip).limit(limit);;

        
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({message: `${err}`});
    }
};

// Get a single product (you might want to implement logic here later)
export const getProduct = (req, res) => {
    return res.status(200).json({ message: 'getProduct' });
};

// Add a new product
export const addProducts = async (req, res) => {
    const { title, description, price, image, category, brand } = req.body;
    
    try { 
        const product = await Product.create({
            title,
            description,
            price,
            image,
            category,
            brand
        });
        return res.status(201).json({ message: 'Product added successfully', product });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

// Update a product
export const updateProducts = (req, res) => {
    return res.status(200).json({ message: 'updateProducts' });
};

// Delete a product
export const deleteProducts = (req, res) => {
    return res.status(200).json({ message: 'deleteProducts' });
};