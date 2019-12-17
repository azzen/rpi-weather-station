import fs from 'fs'
import path from 'path'
export default class WeatherStation {

    /**
     * Récupération des données (tous le json) et les renvoie au format json
     */
    static getData()
    {
        let payload = fs.readFileSync(path.join(__dirname, '../static/weather.json'))
        return JSON.parse(payload)
    }
    /**
     * Récupération de la température
     */
    static getTemp()
    {
        return this.getData()['temperature']
    }
    /**
     * Récupération de l'humidité
     */
    static getHumidity()
    {
        return this.getData()['humidity']
    }
    /**
     * Récupération de la pression
     */
    static getPressure()
    {
        return this.getData()['pressure']
    }
    /**
     * Récupération de la date et l'heure actuelle
     */
    static getTime()
    {
        return this.getData()['time']
    }

}