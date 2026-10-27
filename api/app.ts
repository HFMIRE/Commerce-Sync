import express, { type Request, type Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
router.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Server is healthy.')
})

module.exports = router;