const path = require('path')
const express = require('express')
const app = express()

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Our fake database:
let comments = [
  { id: 1, username: 'Todd', comment: 'lol that is so funny!' },
  { id: 2, username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { id: 3, username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { id: 4, username: 'onlysayswoof', comment: 'woof woof woof' },
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body

  comments.push({
    username,
    comment,
  })
  res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params

  const comment = comments.find((c) => c.id === parseInt(id))

  res.render('comments/show', { comment })
})

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
