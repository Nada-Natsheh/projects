const userPofileModel = require('../model/loginMOdel')
const bcrypt = require('bcrypt');
exports.getLoginPage =(req, res , next)=>{
    res.render('../view/login')
}
exports.login = (req , res , next)=>{
    const username = req.body.username,
     password = req.body.password
    console.log(username, password)
    async function login(){
        let [DataRow, userNameMeta] = await userPofileModel.isUserExist(username)
        //let [isPassMatches, passMeta] = await userPofileModel.isPassMatches(username)
        //console.log(userNameRow[0]['userName'], username)
        //console.log(passNameRow[0]['passWord'])
        const unencryptedPassword = await bcrypt.compare(password, DataRow[0]['passWord'])
        //console.log(unencryptedPassword)
      
         if(DataRow[0]['userName'] == username &&  unencryptedPassword ){
                console.log('logged in')
                res.render('../view/logeninHome')
            }
            else if(DataRow[0]['userName'] !== username ||!unencryptedPassword  ){
             console.log('user name or password is wrong')
              } 
    }
    login()
}