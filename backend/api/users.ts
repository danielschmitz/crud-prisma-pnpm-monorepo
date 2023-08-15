import { Prisma, PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'

const prisma = new PrismaClient()
const app = express()

app.get('/users', async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Get all users'
    #swagger.responses[200] = { description: "A list of users" }
    */
  const users = await prisma.user.findMany()
  res.json(users)
})

app.post('/user', async function (req: Request, res: Response) {
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Add a user'
    #swagger.responses[403] = { description: 'Invalid Input' }
    #swagger.responses[201] = { description: "User created" }
    #swagger.responses[409] = { description: 'User already exists' }
    #swagger.parameters['user'] = {
        in: 'body',
        description: 'User Data',
        required: true,
        schema: { 
            "name": "User name",
            "email": "User email"
        }
    } 
    */
  const { name, email } = req.body

  // todo: validation

  const userWithEmail = await prisma.user.findUnique({
    where: { email },
  })
  if (userWithEmail) {
    return res.status(409).json({ message: 'User email already exists' })
  }

  const user = await prisma.user.create({
    data: { name, email },
  })

  return res.status(200).json(user)
})

export default app
