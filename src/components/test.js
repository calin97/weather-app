import { useCallback, useEffect, useState } from "react"



function Basic() {

    const [data, setData] = useState();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Mures&days=7&aqi=no&alerts=no`);
                const resData = await response.json();
                if (response.ok) {
                    setData(resData);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    console.log(data);




    const mediaAritmetica = (a, b) => (a + b) / 2 // sau Math.avg() din partea mea

    const computeChanceToGratar = (chanceToRain, chanceToSnow) => {
        const chanceToGratarDinParteaPloii = 100 - chanceToRain
        const chanceToGratarDinParteaNinsorii = 100 - chanceToSnow
        // probabilitatiile nu se calculeaza asa dar for our purpouses e ok
        return mediaAritmetica(chanceToGratarDinParteaPloii, chanceToGratarDinParteaNinsorii)
    }
    // "forecastday": [
    //             {
    //                 "date": "2023-07-07",
    //                 "date_epoch": 1688688000,
    //                 "day": {
    //                     "maxtemp_c": 31.9,
    //                     "maxtemp_f": 89.4,
    //                     "mintemp_c": 19.8,
    //                     "mintemp_f": 67.6,
    //                     "avgtemp_c": 23.6,
    //                     "avgtemp_f": 74.5,
    //                     "maxwind_mph": 17.2,
    //                     "maxwind_kph": 27.7,
    //                     "totalprecip_mm": 18.0,
    //                     "totalprecip_in": 0.71,
    //                     "totalsnow_cm": 0.0,
    //                     "avgvis_km": 9.2,
    //                     "avgvis_miles": 5.0,
    //                     "avghumidity": 72.0,
    //                     "daily_will_it_rain": 1,
    //                     "daily_chance_of_rain": 89,
    //                     "daily_will_it_snow": 0,
    //                     "daily_chance_of_snow": 0,
    //                     "condition": {
    //                         "text": "Moderate rain",
    //                         "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
    //                         "code": 1189
    //                     },
    //                     "uv": 5.0
    //                 },
    //                 "astro": {
    //                     "sunrise": "05:39 AM",
    //                     "sunset": "09:02 PM",
    //                     "moonrise": "No moonrise",
    //                     "moonset": "10:12 AM",
    //                     "moon_phase": "Waning Gibbous",
    //                     "moon_illumination": "83",
    //                     "is_moon_up": 1,
    //                     "is_sun_up": 0
    //                 },
    // extragi CPLM vrei ^ ex 
    const zililiNiele = data?.forecast.forecastday.map((dayData) => ({
        date: new Date(dayData.date),
        chanceToGratar: computeChanceToGratar(dayData.day.daily_chance_of_rain, dayData.day.daily_chance_of_snow),
        iconUrl: dayData.day.condition.icon,
        text: dayData.day.condition.text,
        minTemp: dayData.day.mintemp_c,
        maxTemp: dayData.day.maxtemp_c
    }))

    console.log('---------', zililiNiele);



    return (
        <>
            <div>
                nunu
            </div>
        </>
    )
}

export default Basic