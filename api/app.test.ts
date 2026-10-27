import { expect, test, describe } from 'vitest'
import request from 'supertest'

describe('Server Test', () => {
    test('check the health of the api', async () => {
        await request('http://localhost:3000').get('/health').expect(200).then((response) => {
            expect(response.text).toBe('Server is healthy.')
        })
    })
})