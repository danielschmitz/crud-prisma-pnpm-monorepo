const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Swagger API',
    description: '',
    version: '1.0.0',
    contact: {
      name: 'Daniel Schmitz',
      email: 'danieljfa@gmail.com',
      url: 'https://github.com/danielschmitz',
    },
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
  basePath: '/api',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
  security: [{ bearerAuth: [] }],
  definitions: {},
}

const outputFile = './swagger.json'
const endpointsFiles = ['../../backend/api/users.ts']

swaggerAutogen(outputFile, endpointsFiles, doc)
