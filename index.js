import express from "express";
import bodyParser from "body-parser";


const PORT = 3000;
const app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',urlencodedParser,(req,res)=>{
    if(!req.body){
        return res.sendStatus(400);
    }
    console.log(req.body);
    res.render('about',{data:req.body})
})

app.get('/news',(req,res)=>{
    res.render('news')
})

app.get('/:id',(req,res)=>{
    var obj = {title:"Main",array:[1,2,"Uw",4.0,false]}
    res.render('news',{obj:obj})
})
 
app.listen(PORT)