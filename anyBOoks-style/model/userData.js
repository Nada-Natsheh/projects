const userPofileModel = require('./userProfileModel')
exports.userProfile = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(userPofileModel.execute("SELECT * FROM userProfile"))
        reject(Error('something went wrong'))
    })
 }
 exports.newUserProfile = (userName ,email , encryptedPssword) =>{
     return new Promise((resolve , reject)=>{
        resolve(userPofileModel.execute(`INSERT INTO userProfile (userName , email , passWord) values(?, ?, ?)`, 
        [userName ,email,encryptedPssword]))
        reject(Error ('something went wrong '))
     })
 }
 exports.isEmailExist = (email) =>{
     return new Promise ((resolve, reject)=>{
         resolve(userPofileModel.execute(`SELECT * FROM userProfile WHERE email = '${email}'`))
         reject(Error('somthing went wrong'))
     })
 }