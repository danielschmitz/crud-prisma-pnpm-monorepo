import express from 'express'
import cors from 'cors'
import BodyParser from 'body-parser'

const app = express()

// ### CORS ###
app.use(
  cors({
    exposedHeaders: 'Authorization',
  })
)

// ### BODY PARSER ###
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api/users').default)

// ### Hello World! ###
app.get('/hello-world', function (req, res) {
  return res.json({
    message: 'hello world',
  })
})

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Express server listening on port 3000')
})
