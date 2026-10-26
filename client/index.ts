import express, { type Express, type Request, type Response } from 'express';
const app: Express = express()
const port = 5000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/webhook', (req: Request, res: Response) => { 
    //  handle the webhook request here  - 
    console.log('Webhook received:', req.body);
    res.status(200).send('Webhook received');
})

app.listen(port, () => {
    console.log(`App B is running on http://localhost:${port}`)
})