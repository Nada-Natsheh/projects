const APIuniversity = require('../model/apiUniversityModel');
exports.getUniversityData = (req , res, next )=>{
    APIuniversity.universityPromiesData().then(([rows , meta]) =>{
        res.status(200).json({
            data:rows
        })
    }).catch(err=>{ 
        console.log(err)    
    });
}