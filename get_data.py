#!/usr/bin/python3
# coding: utf-8
# Librairie SenseHat
from sense_hat import SenseHat
# Librairie Threading (https://docs.python.org/3/library/threading.html#timer-objects)
import threading
import datetime
# Librarie json
import json
sense = SenseHat()

"""
Fonction qui récupère les données du senseur et les enregistre dans un fichier JSON (au format JSON).
"""
def logToFile():
    data = fetchSensorData()
    filename = "app/static/weather.json"
    try:
        handler = open(filename, "w+")
        """ 
        Le format datetime n'étant pas supporté directement par json dumps on doit alors convertir la date en string pour ensuite
        sérialiser les données en json
        Pour le reste on se contente de suivre la norme
        """
        data["time"] = data["time"].strftime("%a %b %d %H:%M:%S %Y")
        data["humidity"] = round(data["humidity"], 1)
        data["pressure"] = round(data["pressure"], 1)
        data["temperature"] = round(data["temperature"], 1)
        handler.write(json.dumps(data, sort_keys=False, indent=2, separators=(",", ": ")))
        handler.close()
    except:
       print("Une erreur est survenue lors dans l'enregistrement.")
"""
Fonction qui récupère les données du senseur et le renvoie sous la forme d'un dictionnaire
Récupère:
 - La température en degré celsius
 - La pression atmosphérique en hPa
 - L'humidité en %
 - Quand a été prise la mesure.
"""
def fetchSensorData():
    currentDateTime = datetime.datetime.now()
    humidity = sense.get_humidity()
    pressure = sense.get_pressure()
    temp = sense.get_temperature()
    data = {
        "pressure": pressure,
        "humidity": humidity,
        "temperature": temp,
        "time": currentDateTime
    }
    return data

"""
Fonction qui log les données récupérées par fetchSensorData
param refreshRate (int) : Taux de rafraichissement des données affichés à l'écran [secondes].
Exemple 5 := refreshRate, la fonction sera appelée toutes les 5 secondes
"""
def logSensorData(refreshRate):
    # Appelle récursif afin d'exécuter la fonction toutes
    # les n secondes
    threading.Timer(refreshRate, logSensorData, [refreshRate]).start()
    logToFile()
    
# La fonction s'exécutant dans un autre thread, elle ne bloque pas l'exécution du code.
logSensorData(5)