// On utilise une fonction qu'on va directement appeler à l'exécution du script
(function worker() {
    // On récupère les données grâce à une méthode jQuery
    $.get('v0.2.0/data', data => {
        // Une fois les données récupérées on les insère dans le HTML
        $('#humidity').html(`Humidité ${data.humidity} [%]`)
        $('#temperature').html(`Température ${data.temperature} [°C]`)
        $('#pressure').html(`Pression ${data.pressure} [hPa]`)
        $('#time').html(`${data.time}`)
        // Maintenant on rappelle cette fonction dans 5 secondes
        setTimeout(worker, 5000);
    })
})();