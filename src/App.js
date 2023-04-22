import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/404";
import Sidebar from "./Components/Sidebar";
import Issues from "./Components/Pages/Issues";
import Internal from "./Components/Pages/Internal";
import Projects from "./Components/Pages/Projects";
import Development from "./Components/Pages/Development";
import Support from "./Components/Pages/Support";
import NavBar from "./Components/NavBar";


export default function App() {

  const[message , setMessage]  = useState(false)
  const autoMessage = ["aline" ,"symplice" , "Armel" , "Armel"]
  const  getMessage = () => {
    setMessage (!message)
  }
 
  return (
    // <div className="w-full max-w-7xl mx-auto mt-24 flex flex-col gap-y-8 justify-center items-center">
    //   <button
    //     className={`p-3 rounded-lg ${message ? "bg-red-500" : "bg-blue-500"}`}
    //     onClick={getMessage}
    //     // onClick={() => setMessage(!message)}
    //   >
    //     {!message ? "Show unreal message" : "go back to home page"}
    //   </button>
    //   {message && (
    //     <div>
    //       <h2 className="text-2xl text-red-500">Hellooo</h2>
    //       <p className="text-lg font-bold">
    //         you have {autoMessage.length} an read message
    //       </p>
    //     </div>
    //   )}
    // </div>
    <div className="flex my-10 px-4 bg-white py-6  mx-4 md:mx-12 rounded-t-3xl rounded-b-3xl md:h-[900px]">
     <BrowserRouter>
     <Sidebar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} ></Route>
        <Route exact path="/issues" element={<Issues />} ></Route>
        <Route exact path="/internal" element={<Internal />} ></Route>
        <Route exact path="/projects" element={<Projects />} ></Route>
        <Route exact path="/issues" element={<Issues />} ></Route>
        <Route exact path="/development" element={<Development />} ></Route>
        <Route exact path="/support" element={<Support />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
      }
