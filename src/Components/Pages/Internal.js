import NavBar from "../NavBar";
import React from "react";

export default function Internal(){
    const [showModal, setShowModal] = React.useState(false);
    return(
        
        <div class="flex flex-col gap-y-6 bg-sky-50 w-full py-8 px-8 mr-6 rounded-t-3xl rounded-b-3xl">
            <NavBar />
            <div className="flex">
                    <div className="bg-white rounded-xl px-3 py-3 h-auto w-full mr-4">
                        <div>
                        <>
      <button
        className="bg-blue-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        New Internal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
                    onClick={() => setShowModal(false)}
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
          placeholder=" "
          required
          class="block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
        <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="email"
          name="email"
          placeholder=" "
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
        <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="password"
          name="password"
          placeholder=" "
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter password</label>
        <span class="text-sm text-red-600 hidden" id="error">Password is required</span>
      </div>

      <fieldset class="relative z-0 w-full p-px mb-5">
        <legend class="absolute text-gray-500 transform scale-75 -top-3 origin-0">Choose an option</legend>
        <div class="block pt-3 pb-2 space-x-4">
          <label>
            <input
              type="radio"
              name="radio"
              value="1"
              class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="2"
              class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Option 2
          </label>
        </div>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </fieldset>

      <div class="relative z-0 w-full mb-5">
        <select
          name="select"
          value=""
          onclick="this.setAttribute('value', this.value);"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option value="" selected disabled hidden></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
        <label for="select" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Select an option</label>
        <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </div>

      <div class="flex flex-row space-x-4">
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="date"
            placeholder=" "
            onclick="this.setAttribute('type', 'date');"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="date" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
          <span class="text-sm text-red-600 hidden" id="error">Date is required</span>
        </div>
        <div class="relative z-0 w-full">
          <input
            type="text"
            name="time"
            placeholder=" "
            onclick="this.setAttribute('type', 'time');"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="time" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Time</label>
          <span class="text-sm text-red-600 hidden" id="error">Time is required</span>
        </div>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="number"
          name="money"
          placeholder=" "
          class="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
        <label for="money" class="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500">Amount</label>
        <span class="text-sm text-red-600 hidden" id="error">Amount is required</span>
      </div>

      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          name="duration"
          placeholder=" "
          class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <div class="absolute top-0 right-0 mt-3 mr-4 text-gray-400">min</div>
        <label for="duration" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Duration</label>
        <span class="text-sm text-red-600 hidden" id="error">Duration is required</span>
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
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
                    <div>
                            <table className='w-full'>
                                <tr className='text-sky-600 h-10'>
                                    <th className='w-48 text-left pl-3'>Company</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='w-32 text-left'>End date</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='w-32 text-left'>End date</th>
                                    <th className='w-32 text-left'>Start Date</th>
                                    <th className='text-left'>Remark</th>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Microsoft</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>please leave a note</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Amazon</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>No Comments</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Google</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Ordering pizza</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                <tr className='bg-sky-50 text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>IMDB</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Rate this app</td>
                                </tr>
                                <tr className=' text-sky-800 text-xs h-8 rounded-xl'>
                                    <td className='pl-3'>Apple</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>10.10.22</td>
                                    <td>10.04.22</td>
                                    <td>Who bit off my apple?</td>
                                </tr>
                                
                            </table>
                        
                        </div>
                    </div>
            </div>
        </div>
    )
}