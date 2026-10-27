import express, { type Express, type Request, type Response } from 'express';
const app: Express = express() 
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/health', (req, res) => {
  res.status(200).send('server is healthy')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})