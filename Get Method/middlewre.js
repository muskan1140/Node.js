const express= require('express');
const app=express();


//Application MiddleWare
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

// app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to Home page')
})

//Apply MiddleWare on Single Route
app.get('/users',reqFilter,(req,res)=>{
    res.send('Welcome to Users page')
})

app.get('/about',(req,res)=>{
    res.send('Welcome to About page')
})

app.get('/contact',(req,res)=>{
    res.send('Welcome to Contact page')
})



app.listen(4000)