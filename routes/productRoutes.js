import express from 'express';
import { addProducts, deleteProducts, getProduct, getProducts, updateProducts } from '../controllers/productController.js';
import { notAllowed } from '../utils/notAllowed.js';

const router=express.Router();

router.route('/products').get(getProducts).post(addProducts).
all(notAllowed);

router.route('/products/:id').get(getProduct).patch(updateProducts).delete(deleteProducts);
export default router;

//products related request
//get, search, product add, product delete, product update, sorting, pagination


// application.ge('/products');
// app.get('/search-product');
// app.post('/add-product');
// app.delete('/delete-product');
// app.patch('/update-product');
// app.sorting('/search-product');