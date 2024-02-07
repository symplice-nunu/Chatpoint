import { Data } from "../Data/Data";
import NavBar from "../NavBar";


export default function Development(){
    return(
        <div class="flex flex-col gap-y-6 bg-sky-50 w-full py-8 px-1 rounded-t-3xl rounded-b-3xl">
            <NavBar />
            <div className="flex flex-col">
                <div className="bg-indigo-200 text-center font-bold  px-3 py-3 h-auto w-full mr-4 mb-2">
                    <h1>Development List</h1>
                </div>
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full">
                    <div className="overflow-x-auto w-full">
                    <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-center pl-3'>ID</th>
                                    <th className='w-48 text-left pl-3'>Company</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='w-32 text-left'>End date</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='w-32 text-left'>End date</th>
                                    <th className='text-left'>Remark</th>
                                </tr>
                                {
                                    Data.map((item, index) => {
                                        return(
                                     <tr key={index} className={`${index % 2 === 0 ? "bg-sky-50" : "bg-white"} text-sky-800 text-xs h-8 rounded-xl`}>
                                    <td className="text-center">{item.id}</td>
                                    <td className='pl-3'>{item.Company}</td>
                                    <td>{item.StartDate}</td>
                                    <td>{item.EndDate}</td>
                                    <td>{item.StartDate}</td>
                                    <td>{item.EndDate}</td>
                                    <td>{item.Remark}</td>
                                </tr>
                                        )
                                    })
                                }
                                
                                
                            </table>
                        
                        </div>
                    </div>
                    </div>
        </div>
    )
}