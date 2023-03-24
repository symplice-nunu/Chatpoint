import { useState } from "react";


export default function App() {

  const[message , setMessage]  = useState(false)
  const autoMessage = ["aline" ,"symplice" , "Armel" , "Armel"]
  const  getMessage = () => {
    setMessage (!message)
  }
 
  return (
    <div className="w-full max-w-7xl mx-auto mt-24 flex flex-col gap-y-8 justify-center items-center">
      <button
        className={`p-3 rounded-lg ${message ? "bg-red-500" : "bg-blue-500"}`}
        onClick={getMessage}
        // onClick={() => setMessage(!message)}
      >
        {!message ? "Show unreal message" : "go back to home page"}
      </button>
      {message && (
        <div>
          <h2 className="text-2xl text-red-500">Hellooo</h2>
          <p className="text-lg font-bold">
            you have {autoMessage.length} an read message
          </p>
        </div>
      )}
    </div>
  );
      }
