const userPofileModel = require('./userProfileModel')
exports.isUserExist = (userName) =>{
    return new Promise ((resolve, reject)=>{
        resolve(userPofileModel.execute(`SELECT * FROM userProfile WHERE userName = '${userName}'`))
        reject(Error('somthing went wrong'))
    })
}
/*
exports.isPassMatches = (username) =>{
    return new Promise ((resolve, reject)=>{
        resolve(userPofileModel.execute(`SELECT * FROM passWord WHERE userName = '${username}'`))
        reject(Error('somthing went wrong'))
    })
}*/