import React from 'react';
import SidebarDashboard from '../components/SidebarDashboard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hours = Array.from({ length: 10 }, (_, i) => 9 + i); // 9 AM to 6 PM
const days = ['Mon 6', 'Tue 7', 'Wed 8', 'Thur 9', 'Fri 10', 'Sat 11', 'Sun 12'];

const events = [
  { day: 0, hour: 9, text: 'Event name', color: 'bg-gray-100', time: '9:00 AM' },
  { day: 1, hour: 10, text: 'Event name', color: 'bg-pink-100 text-pink-700', time: '10:00 AM' },
  { day: 1, hour: 11, text: 'Event name', color: 'bg-blue-100 text-blue-700', time: '11:00 AM' },
  { day: 2, hour: 10, text: 'Event name', color: 'bg-blue-100 text-blue-700', time: '10:00 AM' },
  { day: 4, hour: 12, text: 'Event name', color: 'bg-green-100 text-green-700', time: '12:00 PM' },
  { day: 6, hour: 9, text: 'Event name', color: 'bg-purple-100 text-purple-700', time: '9:00 AM' },
];

const MySchedule: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9] font-sans text-sm text-[#1a1a1a]">

      {/* Sidebar */}
      <SidebarDashboard activeItem={4} />

      {/* Main Content */}
      <main className="flex-1 px-10 pt-8 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[20px] font-semibold">My schedule</h1>
          <button className="border px-3 py-1 rounded text-gray-700 hover:bg-gray-100 text-sm">Help</button>
        </div>

        {/* Calendar Box */}
        <div className="bg-white border rounded-xl shadow-sm p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-sm font-semibold">JAN</p>
                <p className="text-lg font-bold">10</p>
              </div>
              <div>
                <h2 className="font-semibold text-base">
                  January 2025 <span className="text-gray-500 ml-2 text-sm">Week 1</span>
                </h2>
                <p className="text-xs text-gray-500">Jan 1, 2025 – Jan 31, 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded border">
                <ChevronLeft size={16} />
              </button>
              <button className="text-sm px-3 py-1 border rounded hover:bg-gray-100">Today</button>
              <button className="p-1 rounded border">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[850px]">
              <div className="grid grid-cols-8 border-t border-l">
                <div className="border-r border-b h-12"></div>
                {days.map((d, i) => (
                  <div key={i} className="text-center border-r border-b h-12 pt-2 text-xs font-medium text-gray-700">
                    {d}
                  </div>
                ))}
              </div>

              {hours.map((hour, hIdx) => (
                <div key={hIdx} className="grid grid-cols-8 h-20 border-l border-t text-xs relative">
                  <div className="border-r pt-3 pl-1 text-gray-400">
                    {hour % 12 || 12} {hour < 12 ? 'AM' : 'PM'}
                  </div>
                  {Array(7).fill(0).map((_, dIdx) => (
                    <div key={dIdx} className="border-r relative">
                      {events
                        .filter(e => e.day === dIdx && e.hour === hour)
                        .map((e, i) => (
                          <div key={i} className={`absolute top-2 left-2 right-2 rounded p-1 text-xs ${e.color}`}>
                            <p className="font-medium">{e.text}</p>
                            <p>{e.time}</p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex space-x-6 text-xs text-gray-500 mt-4 border-t pt-3">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-pink-400" /> New time proposed
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" /> Confirmed
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gray-400" /> None
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-400" /> Pending
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MySchedule;
