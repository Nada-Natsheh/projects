constbooksDataModel = require('../model/booksDataMOdel');
exports.getData = (req , res, next )=>{
    constbooksDataModel.dataPromies().then(([rows , meta]) =>{
       
       
        res.status(200).json({
            data:rows
        })
    
    }).catch(err=>{ 
        console.log(err)    
    });
}