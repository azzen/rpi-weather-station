import WeatherStation from '../middlewares/get_json_data'

export default class MainController {
    /**
     * @api {get} /
     * @apiVersion 0.1.0
     * @apiName Index
     * @apiGroup MainController
     * @apiPermission none
     * @apiExample Utilisation:
     * curl http://157.26.227.115:3000/
     * @apiSuccess {HTML} Affichage de la page contenant toutes les informations sur le capteur
     */
    renderIndex(req, res) {
        res.render('index', WeatherStation.getData())
    } 
}