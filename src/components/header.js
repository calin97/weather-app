import { useState } from "react";
import BookMarkModal from "./bookMarkModal";
import '../UI/header.css'
import BookMarkSvg from '../utils/bookMarkSvg'


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='headerWrapper '>
                <div className='logoContainer'>
                    <p>Welcome to Weather-App</p>
                </div>
                <div className='bookMarkWrapper'>
                    <div className="btnContainer"></div>
                    <button className="bookMarkBtn" onClick={() => setIsOpen(true)}>
                        <BookMarkSvg className="" />
                    </button>
                </div>
            </div>
            {isOpen && <BookMarkModal setIsOpen={setIsOpen} />}

        </>
    )

}


export default Header