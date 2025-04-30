import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

const app=express();
//console.log(app);

//data base connect
mongoose.connect('mongodb+srv://inima09:June14inima@cluster0.rmpnkba.mongodb.net/').then((val) =>{
    //console.log(val);
    app.listen(5000, ()=>{
        console.log('database connected and server is listening');
    });
}).catch((err) => {
    console.log(err);
});

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 *1024 },
    abortonLimit: true
}));

app.get('/', (req, res)=>{
    // const {q} = req.query;
    // console.log(q);
    //console.log(req.query);
    //console.log(req.body);
    return res.status(200).json({
        message: 'Welcome to coding'
    });
});

app.use(productRoutes);

//start the server
// app.listen(5000, ()=>{
//     console.log('server is listening');
// });