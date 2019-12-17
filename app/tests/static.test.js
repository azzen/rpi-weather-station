import request from 'supertest'
import "regenerator-runtime/runtime"
import app from '../app'

describe('Static endpoint', () => {
    it('should return a json file', async () => {
        const res = await request(app)
        .get('/weather.json')
        expect(res.statusCode).toEqual(200)
        expect(res.headers['content-type']).toContain('application/json')
    })
    it('should return a json file having weather properties', async () => {
        const res = await request(app)
        .get('/weather.json')
        expect(res.body).toHaveProperty('humidity')
        expect(res.body).toHaveProperty('pressure')
        expect(res.body).toHaveProperty('time')
        expect(res.body).toHaveProperty('temperature')
    })
    it('should return a json file having weather properties and correct type', async () => {
        const res = await request(app)
        .get('/weather.json')
        expect(typeof res.body['humidity']).toBe('number')
        expect(typeof res.body['pressure']).toBe('number')
        expect(typeof res.body['time']).toBe('string')
        expect(Date.parse(res.body['time'])).not.toBe(NaN)
        expect(typeof res.body['temperature']).toBe('number')
    })
})
