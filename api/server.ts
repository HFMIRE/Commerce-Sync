import express, { type Express} from 'express';
const app: Express = express() 
const port = 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})