  
const session = require('express-session')
const connectRedis = require('connect-redis')

const redisClient = require('../../db/redis')


const RedisStore = connectRedis(session)

module.exports = session({
    store: new RedisStore({client: redisClient}),
    secret: 'Lets go baby', //Es una cadena que se concatena con el session id para generar la cookie y que el algoritmo de generacion de cookies no sea predecible
    saveUninitialized: false,
    resave: false,
    rolling: true,
    name: 'sessionId',
    cookie: {
        secure: false, 
        httpOnly: false, 
        maxAge: 1000 * 3600 * 3
    }
})