export const getProducts= ((req, res) => {
    return res.status(200).json({message: 'getAllProducts'});
});
export const getProduct= ((req, res) => {
    return res.status(200).json({message: 'getProduct'});
});
export const addProducts=((req,res)=> {
    return res.status(200).json({message: 'addProducts'});
});
export const updateProducts=((req,res)=> {
    return res.status(200).json({message: 'updateProducts'});
});
export const deleteProducts=((req,res)=> {
    return res.status(200).json({message: 'deleteProducts'});
});
