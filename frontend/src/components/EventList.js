import React, { useEffect } from 'react';
import axios from 'axios';

const EventList = () => {

    const[events, setEvents] = React.useState([]);

    useEffect(() => {
        getEvents();
    },[])

    const getEvents=async()=>{
        axios.get('http://localhost:3000/api/getAll')
        .then((response) => {
            setEvents(response.data);
        });
    }

    console.log(events);

    return ( 
        <div className='flex flex-col w-screen h-fit items-center justify-center mt-7' >
            <p className='text-white text-3xl font-bold mb-3' >Events List</p>
            <button className='text-md text-slate-900 bg-white px-2 py-1 rounded-xl' onClick={()=>getEvents()} >Refresh List</button>
            {
                events.map((event, index) => {
                    return (
                        <div key={index} className='flex flex-row w-[50%] h-fit items-center justify-center' >
                            <div className='flex flex-row w-full h-fit p-2 bg-slate-800 items-center justify-center rounded-xl m-1' >
                            <p className='text-white mr-5' ><label className='text-white font-semibold'>Account : </label>{(event.sender).slice(0,6)}...{(event.sender).slice(38)}</p>
                            <p className='text-white' ><label className='text-white font-semibold'>Sum Updated : </label>{event.sum}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default EventList;