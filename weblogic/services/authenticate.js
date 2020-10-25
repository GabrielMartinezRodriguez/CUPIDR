const clientDAO = require('../dao/users')
const bcrypt = require('bcryptjs')

async function authenticate(email, password) {
    
    try {
        const user = await clientDAO.findByEmail(email);

        const match = await bcrypt.compare(password, user.password)

        if (match) {
            return user
        }
        else {
            return Promise.reject('Contraseña incorrecta')
        }
    } catch (err) {
        return Promise.reject('Email no encontrado')
    }
}

module.exports = authenticate;