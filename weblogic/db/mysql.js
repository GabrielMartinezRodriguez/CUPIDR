const mysql = require('mysql')

const mysqlClient = mysql.createConnection({
    host            : "mysql",
    user            : "admin",
    password        : "admin",
    database        : "users",
    port            :  3306,
    insecureAuth    : true
})


mysqlClient.connect()


module.exports = mysqlClient