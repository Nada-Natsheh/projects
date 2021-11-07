const mysql2 = require('mysql2')
const pool = mysql2.createPool({
    host:'localhost',
    user:'nada',
    database:'exchangingBooksUserProfile',
    password:'password'
})
module.exports = pool.promise();