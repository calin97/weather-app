import { useCallback, useEffect, useState } from "react"
import '../UI/dashBoard.css'



function DashBoard() {

    //     const [data, setData] = useState();


    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Mures&days=7&aqi=no&alerts=no`);
    //                 const resData = await response.json();
    //                 if (response.ok) {
    //                     setData(resData);
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         };

    //         fetchData();
    //     }, []);

    //     console.log(data);




    //     const mediaAritmetica = (a, b) => (a + b) / 2 // sau Math.avg() din partea mea

    //     const computeChanceToGratar = (chanceToRain, chanceToSnow) => {
    //         const chanceToGratarDinParteaPloii = 100 - chanceToRain
    //         const chanceToGratarDinParteaNinsorii = 100 - chanceToSnow
    //         // probabilitatiile nu se calculeaza asa dar for our purpouses e ok
    //         return mediaAritmetica(chanceToGratarDinParteaPloii, chanceToGratarDinParteaNinsorii)
    //     }

    //     const zililiNiele = data?.forecast.forecastday.map((dayData) => ({
    //         date: new Date(dayData.date),
    //         chanceToGratar: computeChanceToGratar(dayData.day.daily_chance_of_rain, dayData.day.daily_chance_of_snow),
    //         iconUrl: dayData.day.condition.icon,
    //         text: dayData.day.condition.text,
    //         minTemp: dayData.day.mintemp_c,
    //         maxTemp: dayData.day.maxtemp_c
    //     }))

    //     console.log('---------', zililiNiele);



    return (
        <>
            <div className="dashBoardContainer">
                <div className="searchBoxContainer">
                    <input className="searchInput" type="text" placeholder="search location" />
                </div>
                <div className="forecastDisplay">

                </div>
            </div>
        </>
    )
}

export default DashBoard