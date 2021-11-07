const booksDataMOdel = require('../model/booksDataMOdel')
const multer = require('multer')
const booksData =[]
exports.getPage = (req, res , next)=>{
    
    res.render('../view/addBook')  
  
     
}
let imageMulterPathName =' '
let fileStorageEngine = multer.diskStorage({
    destination:(req , file, cd) =>{
        cd(null, './assets/imges/uploadedImages')
    },
    filename: (req, file , cb) =>{
        cb(null, file.originalname)
        imageMulterPathName = file.originalname
    

    } 

    

})
   exports.upload = multer({storage:fileStorageEngine})

    exports.addBook =(req,  res, next)=>{
    let  university =req.body.university,
    college = req.body.college, 
    name = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    sale = req.body.Sale,
    exchange = req.body.exchange,
    donation = req.body.donation,
    price = req.body.price,
    booksinfo = req.body.booksinfo;
   
    if(donation == undefined){
        donation='none'
    } if(exchange == undefined ){
        exchange = 'none'
    } if(sale ==undefined){
        sale = 'none'
    }
  
        // console.log(university,college, imagePathName, name, email, phone , sale , exchange, donation, price, booksinfo)
        booksDataMOdel.addBook(university,college, imageMulterPathName, name, email, phone , sale , exchange, donation, price, booksinfo).then(()=>{
        console.log('book has been added..........,,,,.,')
        res.render('../view/addBook')
    }).catch(err =>{
        // res.render('sothing went worng')
    })
    // console.log(req.body)
} 