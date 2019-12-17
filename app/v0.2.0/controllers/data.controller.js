import WeatherStation from '../../middlewares/get_json_data'

export default class DataController {
    /**
     * @api {get} /v0.2.0/data/ Affiche toutes les données du capteur
     * @apiVersion 0.2.0
     * @apiName findAll
     * @apiGroup Sense Hat
     * @apiPermission none
     * @apiExample Utilisation:
     * curl http://157.26.227.115:3000/v0.2.0/data/
     * @apiSuccess {Number} humidity Humidité en %
     * @apiSuccess {Number} pressure Pression en hPa
     * @apiSuccess {Number} temperature Température en degré celsius
     * @apiSuccess {String} time Date et heure actuelle
     */
    findAll(req, res) {
        res.json(WeatherStation.getData())
    }
    /**
     * @api {get} /v0.2.0/data/temperature Récupère la température
     * @apiVersion 0.2.0
     * @apiName findTemperature
     * @apiGroup Sense Hat
     * @apiPermission none
     * @apiExample Utilisation:
     * curl http://157.26.227.115:3000/v0.2.0/data/temperature
     * @apiSuccess {Number} temperature Température en degré celsius
     */
    findTemperature(req, res) {
        res.json({"temperature": WeatherStation.getTemp().toString()})
    }
    /**
     * @api {get} /v0.2.0/data/humidity Récupère l'humidité
     * @apiVersion 0.2.0
     * @apiName findHumidity
     * @apiGroup Sense Hat
     * @apiPermission none
     * @apiExample Utilisation:
     * curl http://157.26.227.115:3000/v0.2.0/data/humidity
     * @apiSuccess {Number} humidity Humidité en %
     */
    findHumidity(req, res) {
        res.json({"humidity": WeatherStation.getHumidity().toString()})
    }
    /**
     * @api {get} /v0.2.0/data/pressure Récupère la pression
     * @apiVersion 0.2.0
     * @apiName findPressure
     * @apiGroup Sense Hat
     * @apiPermission none
     * @apiExample Utilisation:
     * curl http://157.26.227.115:3000/v0.2.0/data/pressure
     * @apiSuccess {Number} pressure Pression en hPa
     */
    findPressure(req, res) {
        res.json({"pressure": WeatherStation.getPressure().toString()})
    }
    /**
     * @api {get} /v0.2.0/data/pressure Récupère la date et l'heure actuelle
     * @apiVersion 0.2.0
     * @apiName findTime
     * @apiGroup Sense Hat
     * @apiPermission none
     * @apiExample Utilisation:
     * curl http://157.26.227.115:3000/v0.2.0/data/time
     * @apiSuccess {String} time Date et heure actuelle
     */
    findTime(req, res) {
        res.json({"time": WeatherStation.getTime().toString()})
    }
}
