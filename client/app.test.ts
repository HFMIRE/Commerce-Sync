import { expect, test, describe } from 'vitest'
import request from 'supertest'

describe('Server Test', () => {
    test('check the health of the api', () => {
        const response = request('http://localhost:5000').get('/health').expect(200).expect('Server is healthy')
    })
})