import {FaReceipt} from 'react-icons/fa'
import {FaRecordVinyl} from 'react-icons/fa'
import {FaRegSun} from 'react-icons/fa'
import {FaRegSnowflake} from 'react-icons/fa'
import {FaJsfiddle} from 'react-icons/fa'
import {FaBan} from 'react-icons/fa'
import {FaBrush} from 'react-icons/fa'
import React from 'react'

export default function Sidebar(){
    return(
         /* Sidebar Options. Done by Symplice 21.03.2023  */
        <div className="mx-4 mt-8 flex flex-col justify-between text-sky-800">
               <div className='grid grid-col gap-y-4'>
               <div className="flex items-center text-red-500 text-6xl px-4">
                    <div>
                    <img className='h-24 w-24' src={process.env.PUBLIC_URL + '/images/chat-point-business-logo-vector-removebg-preview.png'} />
                    </div>
                </div>
               <div className="mt-6 flex items-center bg-sky-50 px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaJsfiddle />
                    </div>
                    <div>&nbsp;Company</div>
                </div>
                <div className="flex items-center px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaBan />
                    </div>
                    <div>&nbsp;Issues</div>
                </div>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaBrush />
                    </div>
                    <div>&nbsp;Internal</div>
                </div>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaReceipt />
                    </div>
                    <div>&nbsp;Projects</div>
                </div>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaRecordVinyl />
                    </div>
                    <div>&nbsp;Development</div>
                </div>
               </div>

                <div className='grid grid-col gap-y-4'>
                <div className="flex items-center  px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaRegSun />
                    </div>
                    <div>&nbsp;Settings</div>
                </div>

                <div className="flex items-center px-4 py-2 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer">
                    <div>
                        <FaRegSnowflake />
                    </div>
                    <div>&nbsp;Support</div>
                </div>

                <div className="mt-4 flex px-4">
                    <span className='text-sky-300 text-xs'>
                        2023 Chainpoint Ltd. ver. 6.9
                    </span>
                </div>
                </div>
            </div>
    )
}


