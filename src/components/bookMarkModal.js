import { useState } from "react"
import classes from '../UI/bookMarkModal.module.css'

function BookMarkModal({ setIsOpen }) {


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

                </div>
                <div className={classes.modalActions}>
                    <div className={classes.actionsContainer}>
                        <button className={classes.cancelBtn} onClick={() => setIsOpen(false)}>Close</button>
                        <button className={classes.deleteBtn} >
                            Add more days
                        </button>
                    </div>

                </div>
            </div>
        </div>



    </>
}

export default BookMarkModal