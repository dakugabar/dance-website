const express = require("express");
const path = require("path");
const fs = require("fs");
const app =express();
const port = 8000;

app.use(express.static('public', Option))
app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('view',path.join(__dirname, 'views'))


app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params);
        
    
})
app.listen(port, ()=>{
    console.log('the application started successfully on port ${port}');
});