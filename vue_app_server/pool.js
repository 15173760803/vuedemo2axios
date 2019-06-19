const mysql = require("mysql");
var  pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'xz',
    prot:3306,
    connectTimeout:20
});

module.exports =pool;