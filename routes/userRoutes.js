import express from 'express';
import { login, register } from '../controllers/userController.js';
import { notAllowed } from '../utils/shareFunc.js';
import { loginSchema, registerSchema, validates } from '../utils/validator.js';

const router = express.Router();

router.route('/login').post(login, validates.body(loginSchema)).all(notAllowed);
router.route('/register').post(register, validates.body(registerSchema)).all(notAllowed);

export default router;