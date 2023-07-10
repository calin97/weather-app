import '../UI/favoriteBookMarkDay.css'
import { toast } from 'react-hot-toast';


function FavoriteBookMarkDay({ key, goodDate, dayName, monthName, text, inconUrl, favBookMarks, syncBookMarks, chanceToGratar }) {





    const deleteFavoriteDayHandler = () => {
        const id = goodDate

        console.log(favBookMarks);
        for (let i = 0; i < favBookMarks.length; i++) {
            // console.log(favBookMarks[i]);
            if (favBookMarks[i] && (favBookMarks[i].goodDate === id)) {
                localStorage.removeItem(id)
            }
        }
        syncBookMarks()
        toast.success(`You successfully deleted ${dayName}!`)

    }


    return (
        <>
            <div className='favDayWrapper'>

                <div className="favDayContainer">
                    <div className="favDayInfo">
                        <p>{dayName} {monthName} {goodDate}</p>
                    </div>
                    <div className="favDayElements">
                        <p>Chance to barbecue: {chanceToGratar}%</p>
                    </div>
                    <button className='delBtn' type="button" onClick={deleteFavoriteDayHandler}>x</button>
                </div>
            </div>
        </>
    )
}

export default FavoriteBookMarkDay