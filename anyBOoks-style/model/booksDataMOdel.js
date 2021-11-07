const dataBase = require('./dataBaseModel');
exports.dataPromies = ()=>{
   return new Promise((resolv, reject)=>{
       resolv(dataBase.execute("SELECT * FROM booksData"))
       reject(Error('something went wrong'))
   })
}
exports.addBook = (university,college, imageMulterPathName, name, email, phone , sale , exchange, donation, price, booksinfo)=>{
    return new Promise((resolve, reject)=>{
       resolve(dataBase.execute(`INSERT INTO booksData ( university,college, imge, name, email, phone , sale , exchange, donation, price, booksinfo) values (?, ? ,?, ? ,? ,? ,?, ?, ?, ?,?)`,
       [university,college, imageMulterPathName, name, email, phone , sale , exchange, donation, price, booksinfo]))
       reject(Error ('something went wrong '))
    })
}
