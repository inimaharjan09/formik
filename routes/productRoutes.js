import express from 'express';
import { addProducts, deleteProducts, getProduct, getProducts, getTop, updateProducts} from '../controllers/productController.js';
import { fileCheck, updateFileCheck } from '../middlewares/checkFile.js';
import { notAllowed } from '../utils/shareFunc.js';
import { checkId } from '../middlewares/checkId.js';
import validate from 'express-joi-validation';
import { productValSchema } from '../utils/validator.js';

const validator = validate.createValidator({});

const router = express.Router();

router.route('/products').get(getProducts).post(fileCheck, addProducts, validator.body(productValSchema)).all(notAllowed);

router.route('/products/getTop-5').get(getTop, getProducts).post(addProducts).all(notAllowed);

router.route('/products/:id').get(getProduct).patch(checkId, updateFileCheck, updateProducts).delete(checkId, deleteProducts).all(notAllowed);


export default router;

//products related request
//get, search, product add, product delete, product update, sorting, pagination


// application.ge('/products');
// app.get('/search-product');
// app.post('/add-product');
// app.delete('/delete-product');
// app.patch('/update-product');
// app.sorting('/search-product');