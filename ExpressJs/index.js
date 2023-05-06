const express = require('express');
// const path= require('path');


const app = express();
// const publicPath= path.join(__dirname,'public');

// app.use(express.static(publicPath));
app.get('',(req,res)=>{
    res.send(`<h1>Hello, this is Home Page</h1><a href="/about" > Go to About Page</a>
    `);
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type = "text" placeholder="User name" value="${req.query.name}" />
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
});

app.get('/help',(req,res)=>{
    res.send([
        {
           name:'muskan',
           email:'muskan@test.com'
        },
        {
            name:'ashish',
            email:'ashish@gmail.com'
        }
    ]);
});

console.log(__dirname)

app.listen(5000);