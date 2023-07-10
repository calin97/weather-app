import { useCallback, useEffect, useState } from "react"
import classes from '../UI/bookMarkModal.module.css'
import FavoriteBookMarkDay from "./favoriteBookMarkDay";

function BookMarkModal({ setIsOpen }) {

    const [favBookMarks, setFavBookMarks] = useState([])

    // const test = JSON.parse(localStorage.getItem('bookMarks'));
    // console.log(test);

    // function to get all data from local storage


    const syncBookMarks = useCallback(() => {
        let bookMarkArr = []
        for (let i = 0; i < localStorage.length; i++) {
            if (Number(localStorage.key(i))) {
                bookMarkArr[i] = JSON.parse(localStorage.getItem(localStorage.key(i)))
            }

        }
        setFavBookMarks(bookMarkArr)

    }, [])

    useEffect(() => {
        syncBookMarks()
    }, [syncBookMarks])

    console.log(favBookMarks);







    return <>
        <div className={classes.darkBG} onClick={() => setIsOpen(false)} />
        <div className={classes.centered}>
            <div className={classes.modal}>
                <div className={classes.modalHeader}>
                    <h5 className={classes.heading}>Forcast Bookmarks</h5>
                </div>
                <button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
                    x
                </button>
                <div className={classes.modalContent}>
                    {favBookMarks.map((day) =>
                        <FavoriteBookMarkDay className={classes.favDayContent}
                            key={day.goodDate}
                            goodDate={day.goodDate}
                            dayName={day.dayName}
                            monthName={day.monthName}
                            text={day.text}
                            inconUrl={day.inconUrl}
                            syncBookMarks={syncBookMarks}
                            favBookMarks={favBookMarks}
                            chanceToGratar={day.chanceToGratar}
                        />
                    )}

                </div>
                <div className={classes.modalActions}>
                    <div className={classes.actionsContainer}>
                        <button className={classes.cancelBtn} onClick={() => setIsOpen(false)}>Close</button>
                        <button className={classes.deleteBtn} onClick={() => setIsOpen(false)}>
                            Add more days
                        </button>
                    </div>

                </div>
            </div>
        </div>



    </>
}

export default BookMarkModal