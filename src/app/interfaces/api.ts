const dataWeather = {
        "lat": 52.162,
        "lon": 20.786,
        "timezone": "Europe/Warsaw",
        "timezone_offset": 7200,
        "current": {
            "dt": 1652122165,
            "sunrise": 1652064741,
            "sunset": 1652120057,
            "temp": 13.59,
            "feels_like": 11.94,
            "pressure": 1020,
            "humidity": 36,
            "dew_point": -1.05,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.6,
            "wind_deg": 40,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "bezchmurnie",
                    "icon": "01n"
                }
            ]
        },
        "minutely": [
            {
                "dt": 1652122200,
                "precipitation": 0
            },
        ],
        "hourly": [
            {
                "dt": 1652119200,
                "temp": 13.19,
                "feels_like": 11.61,
                "pressure": 1022,
                "humidity": 40,
                "dew_point": -0.09,
                "uvi": 0,
                "clouds": 10,
                "visibility": 10000,
                "wind_speed": 3.45,
                "wind_deg": 64,
                "wind_gust": 6.69,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "bezchmurnie",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
        ],
        "daily": [
            {
                "dt": 1652090400,
                "sunrise": 1652064741,
                "sunset": 1652120057,
                "moonrise": 1652088840,
                "moonset": 1652057580,
                "moon_phase": 0.25,
                "temp": {
                    "day": 15.23,
                    "min": 7.38,
                    "max": 16.87,
                    "night": 11.63,
                    "eve": 14.81,
                    "morn": 7.77
                },
                "feels_like": {
                    "day": 13.91,
                    "night": 10.02,
                    "eve": 13.42,
                    "morn": 5.41
                },
                "pressure": 1030,
                "humidity": 42,
                "dew_point": 2.11,
                "wind_speed": 5.22,
                "wind_deg": 73,
                "wind_gust": 8.93,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "pochmurnie",
                        "icon": "02d"
                    }
                ],
                "clouds": 15,
                "pop": 0,
                "uvi": 5.22
            },
        ]
}

const dataFly =
{
    "success": true,
    "data": [
        {
            "value": 506,
            "trip_class": 0,
            "show_to_affiliates": true,
            "origin": "WAW",
            "destination": "NYC",
            "gate": "City.Travel",
            "depart_date": "2022-06-20",
            "return_date": "2022-06-26",
            "number_of_changes": 1,
            "found_at": "2022-05-05T08:16:41",
            "duration": 1735,
            "distance": 6847,
            "actual": true
        },
    ],
    "currency": "eur",
    "error": ""
}
const passangerObj = {
    seatNumber: '',
    price: 0,
    typeOfSeat: ''
}

export type dataWeatherApi = typeof dataWeather
export type dataFlyApi = typeof dataFly
export type passangerObj = typeof passangerObj


