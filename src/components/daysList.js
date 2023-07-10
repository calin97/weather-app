import { useState, useEffect, useMemo } from "react";
import SingleDay from "./singleDay";
import '../UI/daysList.css'
import LoadingSvg from "./loadingSvg";
import { toast } from 'react-hot-toast';



function DaysList({ searchText }) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            console.log();
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchText ? `${searchText}` : `Cluj-Napoca`}&days=7&aqi=no&alerts=no`);
                const resData = await response.json();
                if (response.ok) {
                    setData(resData);
                    setIsLoading(false)
                }
            } catch (error) {
                toast.error('Error fetching data:');
            }
        };

        fetchData();
    }, [searchText]);

    console.log(data);

    // 


    // const mediaAritmetica = (a, b) => (a + b) / 2 // sau Math.avg() din partea mea

    const computeChanceToGratar = (chanceToRain) => {
        const chanceToGratarDinParteaPloii = 100 - chanceToRain
        // const chanceToGratarDinParteaNinsorii = 100 - chanceToSnow
        return chanceToGratarDinParteaPloii
    }





    const daysForecast = data?.forecast.forecastday.map((dayData) => ({
        date: new Date(dayData.date),
        chanceToGratar: computeChanceToGratar(dayData.day.daily_chance_of_rain),
        iconUrl: dayData.day.condition.icon,
        text: dayData.day.condition.text,
        minTemp: dayData.day.mintemp_c,
        maxTemp: dayData.day.maxtemp_c,
        // details on day
        humidity: dayData.day.avghumidity,
        avgTemp: dayData.day.avgtemp_c,
        maxWind: dayData.day.maxwind_kph,
        precip: dayData.day.totalprecip_in

    }))

    console.log(daysForecast);


    // const region = data?.location.map((element) => ({
    //     country: element.country,
    //     localTime: element.localTime,
    //     place: element.name,

    // }))



    const location = useMemo(() => data?.location, [data])





    // const location = data?.location



    return isLoading ? <LoadingSvg /> : <>
        <div className="locationContainer">
            <div className="locationAndImgWrapper">
                <div className="locationWrapper">
                    <p>{location.name}</p>
                    <p>{location.country}</p>
                    <p>Local Time: {location.localtime}</p>
                </div>
                <div className="principalDisplayImg">
                    <img src={daysForecast[0].iconUrl}></img>
                    <p>Chance to barbecue: {daysForecast[0].chanceToGratar}%</p>
                </div>
            </div>


        </div>
        <div className="daysContainer">
            {daysForecast?.map((day) => (
                <SingleDay
                    key={day.date}
                    date={day.date}
                    chanceToGratar={day.chanceToGratar}
                    iconUrl={day.iconUrl}
                    text={day.text}
                    minTemp={day.minTemp}
                    maxTemp={day.maxTemp}
                    humidity={day.humidity}
                    avgTemp={day.avgTemp}
                    maxWind={day.maxWind}
                    precip={day.precip}
                />
            ))}
        </div>
    </>


}

export default DaysList