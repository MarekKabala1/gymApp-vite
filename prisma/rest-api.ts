import { PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from 'express'
import { DbUserData } from '../src/types/Types'

const app: Express = express()
app.use(express.json())

const prisma = new PrismaClient()

app.get('/users', async (req: Request, res: Response) => {

  const users = await prisma.user.findMany()
  console.log(users)
  res.json(users)
})

app.post('/post', async (req: Request, res: Response) => {
  const { _id, name, email, gender, age, weight, height }: DbUserData = req.body
  const result = await prisma.user.create({
    data: {
      id: '37281372987385',
      name: 'Zenek',
      email: 'zenek@gmail.com',
      gender: 'other',
      height: 170,
      weight: 60,
      age: 34
    }
  })
  res.json(result)

})

app.listen(3001, () => {
  console.log(`app listen on http://localhost:3001`)
})
export default app

