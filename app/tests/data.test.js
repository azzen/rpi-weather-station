import request from 'supertest'
import "regenerator-runtime/runtime"
import app from '../app'

describe('data endpoint', () => {
    it('should return statuscode 200', async () => {
        const res = await request(app)
        .get('v0.1.0/data/')
        expect(res.statusCode).toBe(200)
    })
})

describe('Temperature data endpoint', () => {
    it('should return statuscode 200', async () => {
        const res = await request(app)
        .get('v0.1.0/data/temperature')
        expect(res.statusCode).toBe(200)
    })
})

describe('Humidity data endpoint', () => {
    it('should return statuscode 200', async () => {
        const res = await request(app)
        .get('v0.1.0/data/humidity')
        expect(res.statusCode).toBe(200)
    })
})

describe('Pressure data endpoint', () => {
    it('should return statuscode 200', async () => {
        const res = await request(app)
        .get('v0.1.0/data/pressure')
    })
})

describe('Time data endpoint', () => {
    it('should return statuscode 200', async () => {
        const res = await request(app)
        .get('v0.1.0/data/time')
        expect(res.statusCode).toBe(200)
    })
})