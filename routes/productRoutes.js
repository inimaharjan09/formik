import express from 'express';
import {  removeProduct, getProduct, getProducts, getTop, updateProduct, addProduct} from '../controllers/productController.js';
import { fileCheck, updateFileCheck } from '../middlewares/checkFile.js';
import { notAllowed } from '../utils/shareFunc.js';
import { checkId } from '../middlewares/checkId.js';
import { productValSchema, validates } from '../utils/validator.js';
import { adminCheck, userCheck } from '../middlewares/userCheck.js';

const router = express.Router();

router.route('/').get(getProducts).post(userCheck, adminCheck, fileCheck, addProduct,
    validates.body(productValSchema)).all(notAllowed);

router.route('/Top-5').get(getTop, getProducts).all(notAllowed);

router.route('/:id').get(checkId, getProduct).patch(checkId, userCheck, adminCheck,
    updateFileCheck,updateProduct).delete( userCheck, adminCheck, checkId, removeProduct).all(notAllowed);


export default router;

//products related request
//get, search, product add, product delete, product update, sorting, pagination


// application.ge('/products');
// app.get('/search-product');
// app.post('/add-product');
// app.delete('/delete-product');
// app.patch('/update-product');
// app.sorting('/search-product');