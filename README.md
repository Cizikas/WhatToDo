# Weather WEB system

## Description
This web system is dedicated to check the weather cast for mostly all places of the world.

## Entity definition
-  The main entity of the WEB system is weather forecast.
-  Entity hasa these atributes:
    - coord:
        - coord.lon - number (min: J-180, max: 180)
        - coord.lat - number (min: -90, max: 90)
    - dt - number (ISO 8601 date string, which defines when the information was published by the Author)
    - weather:
        - weather.id - number (min: 1, max: JS number type length)
        - weather.description - string (max:20)
    - main:
        - main.temp - number (min: 200, max: 400)
        - main.humidity - number (min: 0, max: 100)
    - wind:
        - wind.speed - number (min: 0, max: 300)
        - wind.deg - number (min: 0, max: 359)
    - sys:
        - sys.id - number (min: 1, max: JS number type length)
        - sys.country - string (length: 2 to, ISO 3166 type, e. g. "LT", "UK")
        - sys.name - string (max: 100) 
        
        
        

## API definition

- The main information that you can get from API is information about the weather
    - GET http://api.openweathermap.org/data/2.5/weather?q=Dudinka,Russia&appid=?
        - Get data by the location of the place
    - GET http://api.openweathermap.org/data/2.5/weather?lat=35&lon=1397&appid=?
        - Get data by the coordinates

- General errors:
    - 400 - when there is nothing to goecode
    - 401 - when using invalid API key
    - 404 - when values are not found
.
## UI definition

https://wireframe.cc/aO1oyD
