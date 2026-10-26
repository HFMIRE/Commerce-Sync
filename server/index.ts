import express, { type Express, type Request, type Response } from 'express';
const app: Express = express()
const port = 3000
const webhookData: { url: string, event: string, eventId: string }[] = []

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
// stimulate webhook  - Trigger a get request where i pass information 
app.get('/register-webhook', (req: Request, res: Response) => { 
    const { url, event, eventId } = req.body; 

    webhookData.push({ url, event, eventId });
  console.log('Registered webhook with data:', req.body);
    res.status(200).send('Webhook registered!');
})
app.get('/trigger-webhook', (req: Request, res: Response) => { 
    console.log('Webhook received:', req.body);
    res.status(200).send('Webhook received');
})

app.listen(port, () => {
    console.log(`App A is running on http://localhost:${port}`)
})