const mysqlClient = require("../db/mysql")

async function findByEmail (email) {
    var returned

    returned = await new Promise((res, rej) => {
        mysqlClient.query( "SELECT * FROM users WHERE email =  ?", email, (error, results, fields) => {
            if (error) 
                rej(error)
           res(results[0])      
        }) 
    })
    return (returned)
}

async function insertNewUser (user) {

    var returned

    const newUser = { email: user.email, password: user.passwordHashed, rol: user.rol}

    returned = await new Promise((res, rej) => {
        mysqlClient.query("INSERT INTO users SET ?", newUser, (error, results, fields) => {
            
            if (error)
                rej("Error de inserccion")
            res("Nuevo usuario creado")
        })
    })
    return (returned)
}



module.exports = {
    findByEmail,
    insertNewUser
}