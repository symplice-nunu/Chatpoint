import {FaReceipt} from 'react-icons/fa'
import {FaRecordVinyl} from 'react-icons/fa'
import {FaRegSun} from 'react-icons/fa'
import {FaRegSnowflake} from 'react-icons/fa'
import {FaJsfiddle} from 'react-icons/fa'
import {FaBan} from 'react-icons/fa'
import {FaBrush} from 'react-icons/fa'
import React from 'react'
import Issues from './Pages/Issues'
import { Link } from 'react-router-dom'

export default function Sidebar(){
    return(
         /* Sidebar Options. Done by Symplice 21.03.2023  */
        <div className="mx-4 w-[140px] mt-8 flex flex-col justify-between text-sky-800">
               <div className='grid grid-col gap-y-4'>
               <div className="flex items-center text-red-500 text-6xl px-4">
                    <div>
                    <img className='h-24 w-24' src={process.env.PUBLIC_URL + '/images/chat-point-business-logo-vector-removebg-preview.png'} alt="logo"/>
                    </div>
                </div>
                <Link to="/">
               <div className="mt-6 flex items-center bg-sky-50 px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaJsfiddle />
                    </div>
                    <div>&nbsp;Company</div>
                </div>
                </Link>
                <Link to='/issues'>
                    <div className="flex items-center px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                        <div>
                            <FaBan />
                        </div>
                        <div>&nbsp;Issues</div>
                    </div>
                </Link>
                <Link to='/internal'>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaBrush />
                    </div>
                    <div>&nbsp;Internal</div>
                </div>
                </Link>
                <Link to='/projects'>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaReceipt />
                    </div>
                    <div>&nbsp;Projects</div>
                </div>
                </Link>
                <Link to="/development">
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaRecordVinyl />
                    </div>
                    <div>&nbsp;Development</div>
                </div>
                </Link>
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


