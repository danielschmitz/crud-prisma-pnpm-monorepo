import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.get('/all', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

export default app
