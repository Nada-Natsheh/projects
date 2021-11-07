const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'nada',
    database:'APIuniversity',
    password:'password'
})

module.exports = pool.promise();
