import { expect, test, describe } from 'vitest'
import request from 'supertest'
import app from './app.ts'

describe('Server Test', () => {
    test('check the health of the api', async () => {
        await request(app).get('/health').expect(200).then((response) => {
            expect(response.text).toBe('Server is healthy.')
        })
    })
})