import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.get('/users', async (req, res) => {
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Get all users'
    #swagger.responses[200] = { description: "A list of users" }
    */
  const users = await prisma.user.findMany()
  res.json(users)
})

export default app
