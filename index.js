import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';


const app = express();
//console.log(app);

//data base connect
mongoose.connect('mongodb+srv://inima09:June14inima@cluster0.rmpnkba.mongodb.net/shops').then((val) =>{
    //console.log(val);
    app.listen(5000, () => {
        console.log('database connected and server is listening');
      });
    }).catch((err) => {
      console.log(err);
    });
    
    //middleware
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(fileUpload({
      limits: { fileSize: 5 * 1024 * 1024 },
      abortOnLimit: true
    }));
    
    app.use(express.static('uploads'));
    
    
    app.get('/', (req, res) => {
    
      return res.status(200).json({
        message: 'Welcome to Backened',
      });
    
    });
    
    app.use('/api/products', productRoutes);
    app.use('/api/users', userRoutes);
    
    
    
    
    
    //path define file
    //response dine logic
    // model banaune