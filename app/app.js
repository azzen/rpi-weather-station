// Importation des modules nécessaires
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import DataRouter_v010 from './v0.1.0/routes/data.router'
import DataRouter_v020 from './v0.2.0/routes/data.router'
import MainController from './controllers/main.controller'

// Importation des routes
const app = express()

// Configuration de body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// configuration du moteur de templates
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "views"))


// Configuration des routes statiques
app.use('/', express.static(path.join(__dirname, "static")))

// Configuration de la route principale /
const mainController = new MainController()
app.get('/', mainController.renderIndex)

// Configuration des routeurs
app.use('/v0.1.0/data', DataRouter_v010)
app.use('/v0.2.0/data', DataRouter_v020)

// Gestion des erreurs 404
app.get("*", (req, res) => {
    res.status(404).render('not_found', {'link': req.protocol + "://" + req.get('host') + req.originalUrl})
})
export default app