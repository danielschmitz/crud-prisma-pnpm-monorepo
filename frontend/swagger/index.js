const express = require('express')
const app = express()

//
// swagger
//
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

var options = {
  customCssUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
}

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
app.get('/', function (_req, res) {
  res.redirect('/swagger')
})

//
// cors
//
const cors = require('cors')
app.use(
  cors({
    exposedHeaders: 'Authorization',
  })
)

//
// body parser
//
const BodyParser = require('body-parser')
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

//
// start
//
// eslint-disable-next-line no-undef
const port = 3001
app.listen(port, () => {
  console.log(`Check swagger at http://localhost:${port}/swagger`)
})
