export const notAllowed = (req, res)=> {
    return res.status(405).json({message: 'method not allowed'});
}

// export const idCheck = (req, id)=> {
//     if(!mongoose.isValidObjectId(id)) return res.status(400).json({
//         message: 'invalid product id'}
// )}