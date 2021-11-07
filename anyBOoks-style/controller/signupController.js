const userData = require('../model/userData');
const bcrypt = require('bcrypt')
exports.signUpPage = (req, res ,next)=>{
    res.render('../view/signUp')
}
exports.signUpData = (req ,res , next) =>{
    let  userName = req.body.userName,
    email = req.body.email,
    passWord = req.body.passWord;
    async function init(){
    let encryptedPssword = await bcrypt.hash(passWord , 10);
    let [rwos , meta] = await userData.isEmailExist(email);
    if (rwos[0]){
        console.log('you cant use the same email twice')
    } else{
        userData.newUserProfile(userName ,email , encryptedPssword).then(()=>{
        console.log('profile has been added')
        res.render('../view/home')
    }).catch(()=>{
        console.log('somthing went wrong ')
    })
}}
init()
}