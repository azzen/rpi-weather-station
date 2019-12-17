import WeatherStation from '../middlewares/get_json_data'

describe("Json data fetch", () => {
    it("should have a temperature key", () => {
        expect(WeatherStation.getData()).toHaveProperty('temperature')
    })
    it("should have a pressure key", () => {
        expect(WeatherStation.getData()).toHaveProperty('pressure')
    })
    it("should have a humidity key", () => {
        expect(WeatherStation.getData()).toHaveProperty('humidity')
    })
    it("should have a time key", () => {
        expect(WeatherStation.getData()).toHaveProperty('time')
    })
})

describe("Json data type", () => {
    it("temperature must be a number", () => {
        expect(typeof WeatherStation.getData()['temperature']).toBe('number')
    })
    it("humidity must be a number", () => {
        expect(typeof WeatherStation.getData()['humidity']).toBe('number')
    })
    it("pressure must be a number", () => {
        expect(typeof WeatherStation.getData()['pressure']).toBe('number')
    })
    it("time must be a string", () => {
        expect(typeof WeatherStation.getData()['time']).toBe('string')
    })
    it("time should be parsable to a date", () => {
        expect(Date.parse(WeatherStation.getData()['time'])).not.toBe(NaN)
    })
    it('humidity and pressure should be positive numbers', () => {
        const data = WeatherStation.getData()
        expect(data.humidity).toBeGreaterThan(0)
        expect(data.pressure).toBeGreaterThan(0)
    })
})

describe("Json data getter", () => {
    it("temperature should be a number", () => {
        expect(typeof WeatherStation.getTemp()).toBe('number')
    })
    it("humidity should be a number", () => {
        expect(typeof WeatherStation.getHumidity()).toBe('number')
    })
    it("pressure should be a number", () => {
        expect(typeof WeatherStation.getPressure()).toBe('number')
    })
    it("time should be a string", () => {
        expect(typeof WeatherStation.getTime()).toBe('string')
    })
    it("time should be parsable to a date", () => {
        expect(Date.parse(WeatherStation.getTime())).not.toBe(NaN)
    })
})