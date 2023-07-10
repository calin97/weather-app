import { useState } from 'react'
import '../UI/singleDay.css'
import { toast } from 'react-hot-toast';



function SingleDay({ date, chanceToGratar, iconUrl, text, minTemp, maxTemp, humidity, avgTemp, maxWind, precip }) {

    const [isOpen, setIsOpen] = useState(false)

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date(date)
    const dayName = days[d.getDay()]

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[d.getMonth()]

    const detailsBtnHandler = () => {
        setIsOpen(true)
    }

    const goodDate = date.getDate()

    const saveToBookMarksHandler = () => {

        localStorage.setItem(`${goodDate}`, JSON.stringify(({ dayName, monthName, text, iconUrl, goodDate, chanceToGratar })))
        toast.success(`You successfully added ${dayName}!`)
        setIsOpen(false)



    }

    return (
        <>
            <div className="dayContainer">
                <div className='dayEsentialInfoWrapper'>
                    <div className='dayEsentialInfoHeader'>
                        <p>{dayName}</p>
                        <p>{monthName} {goodDate}</p>
                    </div>

                    <p className='dayDescription'>{text}</p>
                    <img src={iconUrl} alt={text}></img>
                    <p>Min: {Math.trunc(minTemp)}°C</p>
                    <p>Max: {Math.trunc(maxTemp)}°C</p>
                    <p>Chance to barbecue: {chanceToGratar}%</p>
                </div>
                <div className='detailsBtnContainer'>
                    <button className="detailBtn type1">
                        <span className="btn-txt" onClick={detailsBtnHandler}>See details</span>
                    </button>
                </div>
            </div>

            {/* DAY DETAILS MODAL */}
            {isOpen &&
                <>
                    <div className='detailsModalBG' onClick={() => setIsOpen(false)} />
                    <div className='detailsModalContainer'>
                        <div className='detailsModalContent'>
                            <div className="modalHeader">
                                <h5>{dayName} {monthName} {date.getDate()}</h5>
                            </div>
                            <div className='detaisDayContainer'>
                                <div className='detailsDay'>
                                    <div className='imgContainer'>
                                        <img src={iconUrl} alt={text}></img>
                                    </div>
                                    <div className='contentWrapper'>

                                        <div className='leftDisplay'>
                                            <p>{text}</p>
                                            <p>Chance to barbecue: {chanceToGratar}%</p>
                                            <p>Min: {Math.trunc(minTemp)}°C</p>
                                            <p>Max: {Math.trunc(maxTemp)}°C</p>
                                        </div>
                                        <div className='rightDisplay'>

                                            <p>Humidity: {humidity}%</p>
                                            <p>Avg Temp: {avgTemp}°C</p>
                                            <p>Max Wind: {maxWind}</p>
                                            <p>Precip: {precip}</p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className='detailsModalActions'>
                                <div className='actionsBtnContainer'>
                                    <button className='detailsModalBtn' onClick={() => setIsOpen(false)}>Close</button>
                                    <button className='detailsModalBtn' onClick={saveToBookMarksHandler}>
                                        Save Day
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            }
        </>
    )
}

export default SingleDay