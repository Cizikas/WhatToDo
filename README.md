# Weather WEB system

## Description
This web system is dedicated to check the weather cast for mostly all places of the world.

## Entity definition
-  The main entity of the WEB system is weather forecast.
-  Entity hasa these atributes:
    - coord - number (min: JS number type length, max: JS number type length)
    - dt - number (ISO 8601 date string, which defines when the information was published by the Author)
    - weather:
        - id - number (min: 1, max: JS number type length)
        - description - string (max:20)
    - main:
        - temp - number (min: 200, max: 400)
        - humidity - number (min: 0, max: 100)
    - wind:
        - speed - number (min: 0, max: 300)
        - deg - number (min: 0, max: 359)
    - sys:
        - id - number (min: 1, max: JS number type length)
        - country - string (length: 2 to, ISO 3166 type, e. g. "LT", "UK")
        - name - string (max: 100) 
        
        
        

## API definition
The main information that you can get from API is information about the weather
    - GET http://api.openweathermap.org/data/2.5/weather?q=Dudinka,Russia&appid=4c495c89f5ba85bbdd690c7a55518274
        Get data by the location of the place
    - GET http://api.openweathermap.org/data/2.5/weather?lat=35&lon=1397&appid=4c495c89f5ba85bbdd690c7a55518274
        Get data by the coordinates

General errors:
    - 400 - when there is nothing to goecode
    - 401 - when using invalid API key
    - 404 - when values are not found

## UI definition
- https://wireframe.cc/aO1oyD
