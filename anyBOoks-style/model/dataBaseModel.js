const mysql = require('mysql2');
//const homeModel = require('../model/homeModel')
const pool = mysql.createPool({
    host:'localhost',
    user:'nada',
    database:'newData',
    password:'password'
})

module.exports = pool.promise();