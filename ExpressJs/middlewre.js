const express= require('express');
const app=express();

const reqFilter=(req,res,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        res.send("Please Provide Age")
    }
    else if(req.query.age<18){
        res.send("You can not access this page")
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to Home page')
})

app.get('/users',(req,res)=>{
    res.send('Welcome to Users page')
})

app.listen(4000)