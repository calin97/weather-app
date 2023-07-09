import { useCallback, useEffect, useState } from "react"
import '../UI/dashBoard.css'
import DaysList from "./daysList"



function DashBoard() {

    const [searchText, setSearchText] = useState('')

    const searchBarHandler = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <>
            <div className="dashBoardContainer">
                <div className="searchBoxContainer">
                    <input className="searchInput" type="text" placeholder="search location" onChange={searchBarHandler} value={searchText} />
                </div>
                <div className="forecastDisplay">
                    <DaysList searchText={searchText} />


                </div>
            </div>
        </>
    )
}

export default DashBoard