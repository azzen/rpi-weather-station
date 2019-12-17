import chalk from 'chalk'
import express from 'express'
import DataController from '../controllers/data.controller'

const router = express.Router()
const controller = new DataController()

router.use(function accessLog(req, res, next) {
    console.log(chalk.blackBright.bgYellow.bold(' ACCESS ') + " Recorded access to the API (0.2.0).\nEndpoint: " + chalk.blue(req.baseUrl) + "\nTime: " + chalk.green(Date.now()))
    next()
})

router.get('/', controller.findAll)

router.get('/temperature', controller.findTemperature)

router.get('/time', controller.findTime)

router.get('/humidity', controller.findHumidity)

router.get('/pressure', controller.findPressure)

export default router
