const express = require('express');
const chalk = require('chalk');
const debug=require('debug')('app');
const morgan=require('morgan');
const path=require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.render('index', {title: 'Globomantics', data: ['a', 'b', 'c'] });
});
 
app.listen(3000, ()=>{
    debug(`listening to port ${chalk.green('3000')}`);
});