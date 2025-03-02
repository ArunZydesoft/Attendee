import React from 'react'
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';

const MySchedule = () => {

return ( 
<div className="">
    <div className="flex">
        <div className="w-2/5 lg:w-1/4 relative">
            <Sidebar />
        </div>
        <div className="w-3/5 lg:w-3/4">
            <Calendar />
        </div>
    </div>
</div>
)
};


export default MySchedule;