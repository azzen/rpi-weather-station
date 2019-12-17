import app from './app'

// Création du serveur
// Définition du port
const PORT = 3000
app.set('port', PORT)

// Démarrage du serveur, écoute sur le port défini avant.
app.listen(PORT, () => {
    console.log('[Weather-Station] Listening on port 3000')
})