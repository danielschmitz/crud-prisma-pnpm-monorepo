import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'
import { HttpStatus } from 'utils'
import { UserValidation } from 'validation'
import { UserData } from 'validation/UserValidation'

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
    #swagger.responses[400] = { description: 'Invalid Input' }
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
  const { name, email }: UserData = req.body

  const validateUser = UserValidation.validate({ name, email })
  if (!validateUser.valid) {
    return res.status(HttpStatus.BadRequest).json(validateUser.errors)
  }

  const userWithEmail = await prisma.user.findUnique({
    where: { email },
  })
  if (userWithEmail) {
    return res
      .status(HttpStatus.Conflict)
      .json({ message: 'User email already exists' })
  }

  const user = await prisma.user.create({
    data: { name, email },
  })

  return res.status(HttpStatus.Created).json({ message: 'User created', user })
})

app.put('/user/:id', async function (req: Request, res: Response) {
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user'
    #swagger.responses[400] = { description: 'Invalid Input' }
    #swagger.responses[200] = { description: "User updated" }
    #swagger.responses[409] = { description: 'User email already exists' }
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
  const id: number = parseInt(req.params.id)
  const { name, email }: UserData = req.body

  const validateUser = UserValidation.validate({ id, name, email })
  if (!validateUser.valid) {
    return res.status(HttpStatus.BadRequest).json(validateUser.errors)
  }

  const checkEmail = await prisma.user.findFirst({
    where: {
      email,
      NOT: {
        id,
      },
    },
  })

  if (checkEmail?.id) {
    return res
      .status(HttpStatus.Conflict)
      .json({ message: 'User email exists' })
  }

  const user = await prisma.user.update({
    where: { id: id },
    data: { name, email },
  })
  return res.status(HttpStatus.OK).json({ message: 'User updated', user })
})

export default app
