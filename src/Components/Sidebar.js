import {FaReceipt} from 'react-icons/fa'
import {FaRecordVinyl} from 'react-icons/fa'
import {FaRegSun} from 'react-icons/fa'
import {FaRegSnowflake} from 'react-icons/fa'
import {FaJsfiddle} from 'react-icons/fa'
import {FaBan} from 'react-icons/fa'
import {FaBrush} from 'react-icons/fa'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar(){
    // const[active, setActive] = useState(true);
    const location = useLocation();

    // const getActive = () => {
    //     // setActive(!active);
    // }
    const active = location.pathname
    const links = [
        {
            path: '/',
            link: 'Company',
            icon: <FaJsfiddle />
        },
        {
            path: '/issues',
            link: 'Issues',
            icon: <FaBan />
        },
        {
            path: '/internal',
            link: 'Internal',
            icon: <FaBrush />
        },
        {
            path: '/projects',
            link: 'Projects',
            icon: <FaReceipt />
        },
        {
            path: '/development',
            link: 'Development',
            icon: <FaRecordVinyl />
        },
    ]
    return(
         /* Sidebar Options. Done by Symplice 21.03.2023  */
        <div className="mx-4 w-[140px] mt-8  hidden md:flex flex-col justify-between text-sky-800 ">
               <div className='grid grid-col gap-y-4'>
               <div className="flex items-center text-red-500 text-6xl px-4">
                    <div>
                    <img className='h-24 w-24' src={process.env.PUBLIC_URL + '/images/chat-point-business-logo-vector-removebg-preview.png'} alt="logo"/>
                    </div>
                </div>
                {
                    links.map((item, index) => {
                        return (
                        <Link to={item.path}>
                            <div className={`mt-1 flex items-center  ${active === item.path ? "bg-sky-300" : null} px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer`}>
                                <div>
                                     {item.icon}
                                </div>
                                <div>&nbsp;{item.link}</div>
                            </div>
                         </Link>
                         )
                    })
                }
               </div>

                <div className='grid grid-col gap-y-4'>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaRegSun />
                    </div>
                    <div>&nbsp;Settings</div>
                </div>

                <Link to="support">
                <div className="flex items-center px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaRegSnowflake />
                    </div>
                    <div>&nbsp;Support</div>
                </div>
                </Link>

                <div className="mt-4 flex px-4">
                    <span className='text-sky-300 text-xs'>
                        2023 Chainpoint Ltd. ver. 6.9
                    </span>
                </div>
                </div>
            </div>
    )
}


