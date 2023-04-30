import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { GrBitcoin } from 'react-icons/gr'

function Header() {
    return (
        <nav className="flex flex-col p-5 sticky top-0 gradient_bg1 text-white bg-neutral-900">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <a href="#" className='flex gap-3 text-3xl font-extrabold'>
                        <GrBitcoin style={{ height: 35, width: 35 }} />
                        Aditya Dike
                    </a>
                </div>
                <div className="flex-1">
                    <ul className="flex gap-10 text-grey text-xl justify-center items-center font-medium">
                        <li><a href="#" className='flex items-center gap-3'>{<AiOutlineHome />}Home</a></li>
                        <li><a href="#" className='flex items-center gap-3'>{<AiOutlineUser />} About</a></li>
                        <li><a href="#" className='flex items-center gap-3'>{<AiOutlineYoutube />} Courses</a></li>
                        <li><a href="#" className='flex items-center gap-3'>{<FiMail />} Join</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;