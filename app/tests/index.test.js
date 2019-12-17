import request from 'supertest'
import "regenerator-runtime/runtime"
import app from '../app'

describe("Home endpoint /", () => {
    it('should render an html page', async () => {
        const res = await request(app)
        .get('/')
        expect(res.statusCode).toBe(200)
        expect(res.headers['content-type']).toContain('text/html')
    })
})