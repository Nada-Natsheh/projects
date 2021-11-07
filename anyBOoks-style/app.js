const express=require("express");
const path=require("path");
const app=express();
app.use(express.urlencoded({extended: true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json())
app.use('/assets',express.static(path.join(__dirname ,'assets' )))
const port = 3000;
const apiDataRouter = require('./router/apiDataRouter')
const apiUNiversity = require('./router/apiUniversityRouter')
const homePage = require('./router/homeRouter')
const productsPage = require('./router/productsRouter')
const addBook = require('./router/addBookRouter')
const signUpPage = require('./router/signUpRouter')
const galleryPage = require('./router/collegeGalleryRoter')
const contactPage = require('./router/contactRouter')
const aboutRouter = require('./router/aboutRouter') 
const loginPage = require('./router/loginRouter')
app.use(homePage)
app.use(apiDataRouter)
app.use(apiUNiversity)
app.use(productsPage)
app.use(addBook)
app.use(signUpPage)
app.use(galleryPage)
app.use(contactPage)
app.use(aboutRouter)
app.use(loginPage)
app.listen(port,()=>{
    console.log(`listening on ${port} `)
    })
    