const express = require('express')
const routes = express.Router()


const routerFree = require('./free_access')



routes.use(routerFree)


module.exports = routes