const authenticateService = require('../../services/authenticate');

async function loginController(req, res) {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        return res.status(400).json('Faltan parametros - Son necesarios email y contraseña')
    }
    try {
        const user = await authenticateService(email, password)

        //Alamacenamos estos datos en la sesion
       
        req.session.user = user

        res.status(200)
        res.send(req.session)

    } catch(error) {

        res.status(401)
        res.send(error)
    }
}

module.exports = loginController;