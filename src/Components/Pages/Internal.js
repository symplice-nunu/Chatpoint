import NavBar from "../NavBar";
import React from "react";
import { Data } from "../Data/Data";

export default function Internal(){
    const [data, setData] = React.useState({
      showModal: false,
      name: '',
      password: '',
      level: '',
      member: '',
      date: '',
      time: '',
      amount: '',
      duration: '',
      email: '',
      validation: false,
    });

    const handleSave = () => {
      setData({
        ...data,
        validation: true,

      })
    }
    const handleSelect = (e)=>{
      setData({ member:e})
    }

    const memberOrganization = [
      {
        Members: 'WAGGGS-ONLY ORGANISATIONS',
      },
      {
        Members: 'WAGGGS-ONLY ORGANISATIONS',
      },
      {
        Members: 'SCOUT AND GUIDE NATIONAL ASSOCIATIONS (SAGNOS)',
      },
      {
        Members: 'JOINT ORGANISATIONS',
      },
      {
        Members: 'FEDERATIONS',
      },
    ]
    
    return(
        
        <div class="flex flex-col gap-y-6 bg-sky-50 w-full py-8 lg:px-8 xl:px-8 rounded-t-3xl rounded-b-3xl">
            <NavBar />
            <div className="flex">
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full">
                        <div>
                        <>
      <button
        className="bg-blue-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setData({
          ...data,
          showModal: true
        })}
      >
        New Internal
      </button>
      {data.showModal ? (
        <>
          <div
            className="justify-center mt-[4px] px-1 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    New Internal
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setData({ ...data, showModal: false })}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className=" text-slate-500 text-lg leading-relaxed">
                    <div class=" bg-gray-100 p-0 sm:p-3 sm:rounded-3xl">
  <div class="mx-auto px-6 py-3 bg-white border-0 shadow-lg sm:rounded-3xl">
    <form id="form" novalidate>
      <div class="relative z-0 w-full">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
          class="block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        { data.validation && data.name.length === 0 ? <span class="text-sm text-red-600" id="error">Name is required</span> : null }
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
         { data.validation && data.email.length === 0 ? <span class="text-sm text-red-600" id="error">Email address is required</span> : null }
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        { data.validation && data.password.length === 0 ? <span class="text-sm text-red-600" id="error">Password is required</span> : null }
       
      </div>

      <fieldset class="relative z-0 w-full p-px mb-5">
        <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose level</legend>
        <div class="block pt-3 pb-2 space-x-4">
          <label>
            <input
              type="radio"
              name="radio"
              value="1"
              class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Level 1
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="2"
              onClick={(e) => setData({ ...data, level: e.target.value })}
              class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Level 2
          </label>
        </div>
        { data.validation && data.level.length === 0 ? <span class="text-sm text-red-600" id="error">Level has to be selected</span> : null }
      </fieldset>

      <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value={data.member}
          onClick={(e) =>{ setData({ ...data, member: e.target.value })
          }}
          onChange={(e)=>handleSelect(e.target.value)}
         
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          {
             memberOrganization.map((item, index) => {
              return(
                <option value="">{item.Members}</option>
              )
             })
          }
          
        </select>
        { data.validation && data.member.length === 0 ? <span class="text-sm text-red-600" id="error">Member has to be selected</span> : null }
      </div>

      <div class="flex flex-row space-x-4">
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="date"
            placeholder="Date"
            onChange={(e) => setData({ ...data, date: e.target.value })}
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          { data.validation && data.date.length === 0 ? <span class="text-sm text-red-600" id="error">Date is required</span> : null }
        </div>
        <div class="relative z-0 w-full">
          <input
            type="text"
            name="time"
            placeholder="Time"
            onChange={(e) => setData({ ...data, time: e.target.value })}
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          { data.validation && data.time.length === 0 ? <span class="text-sm text-red-600" id="error">Time is required</span> : null }
        </div>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="number"
          name="money"
          placeholder="Amount"
          onChange={(e) => setData({ ...data, amount: e.target.value })}
          class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
          { data.validation && data.amount.length === 0 ? <span class="text-sm text-red-600" id="error">Amount is required</span> : null }
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={(e) => setData({ ...data, duration: e.target.value })}
          class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
          { data.validation && data.duration.length === 0 ? <span class="text-sm text-red-600" id="error">Duration is required</span> : null }
      </div>
    </form>
  </div>
</div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setData({ ...data, showModal: false })}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSave}
                  >
                    Save New
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>  
                        </div>
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
                                  <tr key={index} className={`${index % 2 === 0 ? 'bg-sky-50' : 'bg-white'} text-sky-800 text-xs h-8 rounded-xl`}>
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