import express from 'express';

//console.log(express);

const app=express();
//console.log(app);


app.get('/', (req, res)=>{
    return res.status(200).json({
        message: 'Welcome to coding'
    });
});
//port, hostname, backlog
app.listen(5000, ()=>{
    console.log('server is listening');
});