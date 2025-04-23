import express from 'express';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';

const app=express();
//console.log(app);

//middleware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res)=>{
    // const {q} = req.query;
    // console.log(q);
    //console.log(req.query);
    console.log(req.body);
    return res.status(200).json({
        message: 'Welcome to coding'
    });
});

app.use(productRoutes);

//start the server
app.listen(5000, ()=>{
    console.log('server is listening');
});