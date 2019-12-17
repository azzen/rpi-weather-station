import fs from 'fs'
import path from 'path'
export default class WeatherStation {

    static getData()
    {
        let payload = fs.readFileSync(path.join(__dirname, '../static/weather.json'))
        return JSON.parse(payload)
    }
    static getTemp()
    {
        return this.getData()['temperature']
    }
    static getHumidity()
    {
        return this.getData()['humidity']
    }
    static getPressure()
    {
        return this.getData()['pressure']
    }
    static getTime()
    {
        return this.getData()['time']
    }

}