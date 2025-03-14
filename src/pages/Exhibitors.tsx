import Sidebar from "../components/Sidebar";

const Exhibitors = () => {
    const getInfoSvg = () =>{
        return <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-gray-200">
                        <svg className="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
    }
    const getCheckSvg = () =>{
        return <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-green-100">
                        <svg className="h-4 w-4 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 12l5 5l10 -10" /></svg></div>
    }
    const getClockSvg = () =>{
        return  <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-red-100">
                        <svg className="h-4 w-4 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg> </div>
    }
    const getRefreshSvg = () =>{
        return <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-yellow-100">
        <svg className="h-4 w-4 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg></div>
    }
    const data = [
        {id: 1, status: getInfoSvg(), company:'Advanced design and integration', prod_cat:'',content:'',source:'M', note:'', booth:'2548'},
        {id: 2, status: getCheckSvg(), company:'Advanced design and integration', prod_cat:'',content:'',source:'M', note:'', booth:'2548'},
        {id: 3, status: getRefreshSvg(), company:'Advanced design and integration', prod_cat:'',content:'',source:'M', note:'', booth:'2548'},
        {id: 4, status: getRefreshSvg(), company:'Advanced design and integration', prod_cat:'',content:'',source:'M', note:'', booth:'2548'},
        {id: 5, status: getRefreshSvg(), company:'Advanced design and integration', prod_cat:'',content:'',source:'M', note:'', booth:'2548'},
        {id: 6, status: getInfoSvg(), company:'Advanced design and integration', prod_cat:'',content:'',source:'M', note:'', booth:'2548'},
    ]

    return  <div className="">
    <div className="flex">
        <div className="w-2/5 lg:w-1/4 relative">
            <Sidebar />
        </div>
        <div className="w-3/5 lg:w-3/4 bg-[#F8F8F8]">
            <div className="px-6 py-10">
                <h2 className="text-4xl">Exhibitors</h2>
                <div className="inline-flex rounded-md py-4" role="group">
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    My Exhibitors
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    All Exhibitors
                    </button>
                </div>
                <div id="alert-1" className="flex items-center p-4 mb-4 rounded-lg bg-white dark:bg-gray-800 dark:text-blue-400" role="alert">
                    <div className="w-8 h-8 ring-1 inline-flex items-center justify-center rounded-lg text-[#eae8e8]">
                    <svg className="shrink-0 h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                </div>
                <div className="ms-3 text-sm font-medium">
                    You have 47 exhibitors that you haven't viewed or requested an appointment with yet.
                </div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 text-gray rounded-lg  p-1.5 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-1" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="#ada6a6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
                </div>
                
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="p-4 bg-white dark:bg-gray-900">
                        <div className="relative mt-1 inline-flex">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 inline-flex items-center justify-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="table-search" className="block p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-150 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                        </div>
                        <button type="button" className="font-medium rounded-lg mx-5 text-sm px-5 py-2.5 text-center inline-flex items-center me-2 border border-gray-300">
                        <svg className="w-4 h-4 text-gray-800 dark:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/>
                        </svg>
                        Shedule an appointment
                        </button>
                        <button type="button" className="font-medium rounded-lg mx-5 text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 border border-gray-300">
                        <svg className="w-4 h-4 text-gray-800 dark:text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                        </svg>
                        Remove my Exhibitor
                        </button>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-white">
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Categories
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Source
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Note
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Booth
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((da)=>{
                                    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{da.status}</td>
                                        <td className="px-6 py-4">{da.company}</td>
                                        <td className="px-6 py-4">{da.prod_cat}</td>
                                        <td className="px-6 py-4">{da.content}</td>
                                        <td className="px-6 py-4">{da.source}</td>
                                        <td className="px-6 py-4">{da.note}</td>
                                        <td className="px-6 py-4">{da.booth}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <div className="bg-white px-5 pt-5 pb-8">
                        <span>Page 1 of 10</span>
                        <button type="button" className="float-right font-medium rounded-lg mr-5 text-sm px-3 py-2 text-center inline-flex items-center  me-2 border border-gray-300">Next</button>
                        <button type="button" className="float-right font-medium rounded-lg mr-5 text-sm px-3 py-2  text-center inline-flex items-center me-2 border border-gray-300">Previous</button>
                       
                    </div>
                </div>

                <div className="text-gray-600 text-[12px] py-5 me-2 inline-flex justify-center items-center">
                    <div className="inline-flex justify-center items-center px-2">
                            {getClockSvg()}
                        <span>New time Proposed</span>
                    </div>
                    <div className="inline-flex justify-center items-center px-2">
                        {getCheckSvg()}
                        <span>Confirmed</span>
                    </div>
                    <div className="inline-flex justify-center items-center px-2">
                        {getInfoSvg()}
                    
                        <span>None</span>
                    </div>
                    <div className="inline-flex justify-center items-center px-2">
                        {getRefreshSvg()}
                        <span>Pending</span>
                    </div>
                </div>

                <div className="text-gray-600 text-[12px] pb-5 me-2">
                    <span className="font-bold px-2">M-</span><span>You were matched to this exhibitor during your registration process</span>
                    <span className="font-bold px-2">S-</span><span>You selected this exhibitor in the list of all exhibitors</span>
                    <span className="font-bold px-2">Sc-</span><span>You were scanned by this exhibitor</span>
                </div>
            </div> 
        </div>
    </div>
</div>
}

export default Exhibitors;