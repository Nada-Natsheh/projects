const apiUniversityModel = require('./apiUnoversitDatabaseModel');
exports.universityPromiesData = ()=>{
   return new Promise((resolv, reject)=>{
       resolv(apiUniversityModel.execute("SELECT * FROM University"))
       reject(Error('something went wrong'))
   })
}
