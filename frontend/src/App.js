import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import GetContract from './hooks/GetContract';
import addABI from './ABI/addABI.json';
import EventList from './components/EventList';
import GetTransaction from './hooks/GetTransaction';

function App() {

  const[n1, setN1] = useState('');
  const[n2, setN2] = useState('');
  const[hash,setHash]=useState('');
  const addContract = GetContract('0x45D2D5ae050174f6a2EaA3490c893D5726662C07', addABI.abi);

  const Sum=async()=>{
    const sum = await addContract.getSum(n1,n2);
    console.log(sum.hash);
    setHash(sum.hash);
  }

  const waitTx = GetTransaction(hash);

  return (
    <>
    <div className='absolute z-1' >
      <Navbar/>
    </div>
    <div className='flex flex-col justify-center items-center bg-slate-900 w-screen h-screen' >
      <p className='text-3xl font-extrabold text-white' >Smart Contract Events Listener{waitTx}</p>
      <div className='flex flex-row items-center mt-4' >
        <label className='text-white font-semibold text-2xl mr-2' >Number 1 : </label>
        <input className=' bg-slate-900 border-[2px] border-slate-700 rounded-xl px-4 py-2 text-xl text-white' onChange={(e)=>setN1(e.target.value)} />
      </div>
      <div className='flex flex-row items-center mt-4' >
        <label className='text-white font-semibold text-2xl mr-2' >Number 2 : </label>
        <input className=' bg-slate-900 border-[2px] border-slate-700 rounded-xl px-4 py-2 text-xl text-white' onChange={(e)=>setN2(e.target.value)} />
      </div>
      <button className='bg-white text-slate-900 px-5 py-2 rounded-xl mt-4 ' onClick={()=>Sum()}  >Get Sum</button>
    <EventList/>
    </div>
    </>
  );
}

export default App;
