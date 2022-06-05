const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response')
})
app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body
  res.send(`Ok, here are your ${qty} ${meat}s.`)
})

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!!!')
})
