const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// public static path
app.set('view engine','hbs');
const template_path = path.join(__dirname,"../templates/views"); 
app.set('views', template_path);

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

const partials_path = path.join(__dirname,"../templates/partials"); 
hbs.registerPartials(partials_path);


//Routing
app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg : 'Opps! Page Not Found, Click here to go back'
    });
});
app.listen(port,()=>{
    console.log(`listening on port no ${port}`);
});