import {useState} from 'react';

export default function Login(){

    const[message, setMessage] = useState(true);
    const countMessage = ['React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1'];
    const countMessage1 = ['React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1','React1'];
    const Username = 'Symplice';
    const Username1 = 'Mutesi Aline';

    const getMessage = () => {
        setMessage(!message);
    }
return(
    
<div className='justify-center items-center flex mt-9 flex-col bg-teal-500 py-6 mx-36'>
    <button className={`w-auto px-12 py-2 mb-8 rounded text-white ${message ? "bg-indigo-500" : "bg-red-500"}`} onClick={getMessage}>
        {!message ? "Login" : "Sign Up"}
    </button>
    {
        !message && 
<div>
    <h2>Hello, <b><i className='text-rose-700'>{Username}</i></b></h2>
    <p>You have <b className='text-rose-700'>{countMessage.length}</b> Unread Messages, Please <b className='text-rose-700 cursor-pointer' onClick={getMessage}>Sign Up</b> to Read all Messages</p>
    </div>
        
    }

{
        message && 
<div>
    <h2>Hello, <b><i className='text-rose-700'>{Username1}</i></b></h2>
    <p>You have <b className='text-blue-700'>{countMessage1.length}</b> Unread Messages, Please <b className='text-blue-700 cursor-pointer' onClick={getMessage}>Login</b> to Read all Messages</p>
    </div>
        
    }

</div>


);
}