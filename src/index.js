import express from 'express'
const app = express()

app.get('/', (req, res) => {
  return res.json({ ok: true })
})

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server is starter`)
})
