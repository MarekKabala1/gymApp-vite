import express from "express"

const port = process.env.PORT || 5001
const app = express()

app.get ('/', (req,res )=>{
  return res.send('hello from express')
});

app.post('/api',(req,res)=>{
  console.log(req.body)

  return res.sendStatus(200)
})

app.listen(5000,()=>{
  console.log('Aplication startted on http://localhost:5000')
});