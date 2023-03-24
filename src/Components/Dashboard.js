
import '../App.css'
import {FaChevronDown} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'
import {FaRegTimesCircle} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import Sidebar from './Sidebar'
import Dropdown from './Dropdown'

export default function Dashboard(){
    return(
        
        <div className="justify-left  flex my-10 mb-2 bg-white py-6 mx-12 rounded-t-3xl rounded-b-3xl">
            {/* Sidebar Options. Done by Symplice 21.03.2023  */}
           <Sidebar />
            {/* Morning Messages for Users. Done by Symplice 21.03.2023  */}
            <div class="flex flex-col gap-y-6 bg-sky-50 w-full py-8 px-8 mr-6 rounded-t-3xl rounded-b-3xl">
                <div>
                     <div className='flex justify-between items-center text-sky-900 font-bold mb-4'>
                       <div className='flex items-center'>
                       Chainpoint
                        <span className='text-orange-500 ml-2'>
                            <FaChevronDown />
                            </span>
                       </div>
                     <div className='flex items-center'>
                        <span className=''>
                        <FaRegBell />
                        </span>
                        <span className='text-blue-500 text-5xl ml-3 mr-2'>
                        <FaUserCircle />
                        </span>
                        <Dropdown />
                     </div>
                     </div>
                     <div className='text-sky-900 font-bold text-2xl'>Issue Dashboard</div>
                     <div className='text-sky-300 text-xs pt-2'>Good morning MUTESI Aline please pay attention to your outstanding issues.</div>
                </div>
                {/* Contents for Announcement. Done by Symplice 21.03.2023  */}
                <div className="flex flex-col bg-orange-200 px-8 py-8 text-orange-500 rounded-2xl">
                    <span className="mb-2 flex">
                        <span className='mt-1 pr-2'>
                            <FaQuestionCircle />
                        </span>
                        <b>Announcement!</b>
                        </span>
                    <div className='pl-6 flex justify-between items-center'>
                        <div>ChainPoint Support will be upgraded to release 6.10 on Wednesday 6 April. Thanks to the use of slot deployment</div>
                        <div className='text-2xl'><FaRegTimesCircle /></div>
                    </div>
                    <span className='pl-6'>functionality no outage time is expected. After the upgrade a new message will be posted here.</span>
                    <span className='pl-6'>-- ChainPoint Support Team, 20.03.23</span>
                </div>
                {/* Cards sections for Hight priority issues and issue ready for test. Done by Symplice 21.03.2023 */}
                <div class="grid grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl px-3 py-8 flex items-center">
                        <div className="border-red-200 border-2 rounded-full w-16 h-16 pt-0.5 pl-0.5">
                            <div className="border-red-600 border-2 rounded-full w-14 h-14 text-red-600 pl-5 pt-3">0</div>
                            
                        </div>
                        <div className="px-9 pt-2 ">Hight Priority Issues</div>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-8 flex items-center">
                    <div className="border-orange-200 border-2 rounded-full w-16 h-16 pt-0.5 pl-0.5">
                            <div className="border-orange-400 border-2 rounded-full w-14 h-14 text-orange-600 pl-5 pt-3">1</div>
                        </div>
                        <div className="px-6 ">Issues with a deadline this week </div>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-8 flex items-center">
                    <div className="border-green-200 border-2 rounded-full w-16 h-16 pt-0.5 pl-0.5">
                            <div className="border-green-400 border-2 rounded-full w-14 h-14 text-green-400 pl-5 pt-3">2</div>
                        </div>
                        <div className="px-9 pt-2 ">Issue ready for test</div>
                    </div>
                    <div className="bg-white  rounded-xl px-6 py-3  pt-4 grid">
                    <div>
                        <div className='flex justify-between items-center'>
                        <div className="text-xs">Issue</div>
                        <div className="text-xs">34 / <span className="text-gray-300">96</span></div>
                        </div>
                        <hr className="border-orange-500 border-2 rounded w-32"></hr>
                    </div>
                    <div className="border-red-500 ">
                        <div className='flex justify-between items-center'>
                        <div className="text-xs">Contact Report</div>
                        <div className="text-xs">5820 / <span className="text-gray-300">5832</span></div>
                        </div>
                        <hr className="border-blue-500 border-2 rounded"></hr>
                        </div>
                    <div className="">
                        <div className='flex justify-between'>
                        <div className="text-xs">User Story</div>
                        <div className="text-xs">12 / <span className="text-gray-300">22</span></div>
                        </div>
                        <hr className="border-green-500 border-2 rounded w-24"></hr>
                    </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full mr-4">
                    {/* SSL about to expire table. Done by Symplice 22.03.2023 */}
                        <div className='flex justify-between px-3'>
                        <div>SSL about to expire<span className="ml-6 bg-sky-50 rounded-full px-2 text-sky-600">45</span></div>
                        <div>
                            <input className='border-gray-300 border-2 px-3 rounded text-xs h-8 ml-2' type="button" value="<" />
                            <input className='border-gray-300 border-2 px-3 rounded text-xs h-8 ml-2 w-14 text-sky-600' type="button" value="1" />
                            <input className='border-gray-300 border-2 px-3 rounded text-xs h-8 ml-2' type="button" value=">" />
                        </div> 
                        </div>
                        <div>
                            <hr className='border border-gray-100 mb-2 mt-2'></hr>
                        </div>

                        <div>
                            <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-left pl-3'>Company</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='w-32 text-left'>End date</th>
                                    <th className='text-left'>Remark</th>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Microsoft</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>please leave a note</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Amazon</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>No Comments</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Google</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>Ordering pizza</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>Rate this app</td>
                                </tr>
                            </table>
                        
                        </div>
                    </div>
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-96">
                    {/* Scrum summary per person. Done by Symplice 22.03.2023 */}
                    <div className='grid grid-rows'>
                        <div className='text-xs mb-4'>Scrum summary per person<span className="ml-6 bg-sky-50 rounded-full px-2 text-sky-600">45</span></div>
                        
                        <div>
                            <hr className='border border-gray-100 mb-2 mt-2'></hr>
                        </div>
                    </div>
                    <div>
                            <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-left text-xs pl-3'>Responsible</th>
                                    <th className='w-32 text-left text-xs'>Total Hours</th>
                                    <th className='w-32 text-left text-xs'>Hours Available</th>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Jane Cooper</td>
                                    <td>4.5</td>
                                    <td>80</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Esther Howard</td>
                                    <td>5.6</td>
                                    <td>40</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Cameron Williamson</td>
                                    <td>12</td>
                                    <td>16</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Leslie Alexander</td>
                                    <td>36</td>
                                    <td>23</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Jenny Wilson</td>
                                    <td>350</td>
                                    <td>45</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
       
        
    );
}