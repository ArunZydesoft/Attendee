import React from 'react'
import partner1Img from "../assets/img/partner1.png";
import partner2Img from "../assets/img/partner2.png";
import partner3Img from "../assets/img/partner3.png";
import { HomeIcon, IdentificationIcon, CalendarIcon, BriefcaseIcon, LifebuoyIcon, UserCircleIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


const Sidebar = () => {

    return (
        <div className="h-screen flex flex-col p-5 border-r-1 border-gray-500 sticky inset-0">
            <div className="p-5 bg-[linear-gradient(180deg,_#353535,_#1D1D1D)] rounded-[18px] mb-5">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                    <img src={partner1Img} className="h-8" alt="Image" />
                    <img src={partner2Img} className="h-8" alt="Image" />
                    <img src={partner3Img} className="h-8" alt="Image" />
                </div>
                <p className="font-bold text-xl md:text-3xl bg-[linear-gradient(180deg,_#7C85FF,_#F6F6F6)] bg-clip-text text-transparent">
                    International Microwave symposium 2025
                </p>
            </div>
            <div className="mb-auto overflow-y-auto">
                <p className="text-black text-xl font-bold">Robinson</p>
                <p className="text-gray-500 mb-3">Badge ID - 1157953</p>
                <ul className="font-medium">
                    <li className="flex items-end p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                        <HomeIcon  className="w-6 h-6 inline-block pr-1" />
                        <span>Home</span>
                    </li>
                    <li className="flex items-end p-2 hover:bg-gray-100 cursor-pointer">
                        <IdentificationIcon className="w-6 h-6 inline-block pr-1" />
                        <span>Registration Tools</span>
                    </li>
                    <li className="flex items-end p-2 hover:bg-gray-100 cursor-pointer">
                        <BriefcaseIcon className="w-6 h-6 inline-block pr-1" />
                        <span>My Exhibitors</span>
                    </li>
                    <li className="flex items-end p-2 hover:bg-gray-100 cursor-pointer">
                        <CalendarIcon className="w-6 h-6 inline-block pr-1" />
                        <span>My Schedule</span>
                    </li>
                </ul>
            </div>
            <div className="font-medium bg-white border-t-1 border-gray-100">
                <p className="flex items-end p-2 cursor-pointer mb-3">
                    <LifebuoyIcon className="w-6 h-6 inline-block pr-1" />
                    Support
                </p>
                <div className="flex items-center border-1 border-gray-200 rounded-xl p-2">
                    <UserCircleIcon className="w-8 h-8 inline-block mr-2" />
                    <div className="flex flex-col">
                        <span>Robinson</span>
                        <span className="text-gray-500">robin@gmail.com</span>
                    </div>
                    <div className="self-start ml-auto mr-2">
                        <ChevronUpIcon className="w-3 h-3 text-gray-500" />
                        <ChevronDownIcon className="w-3 h-3 text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;