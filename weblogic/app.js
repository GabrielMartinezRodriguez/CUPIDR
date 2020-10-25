const express = require('express')
const app = express()

const routes = require('./routes/routesController')
const middleware = require('./middleware/middlewareController')

app.use(express.json())


app.use(middleware.session)

app.use(routes)


app.listen(80)