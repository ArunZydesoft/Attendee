import React, { useState } from 'react';
import SidebarDashboard from '../components/SidebarDashboard';

const CMLMicro: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Sunday Jun 15, 2025');
  const [startTime, setStartTime] = useState('8.00 AM');
  const [endTime, setEndTime] = useState('11.00 AM');

  const handleSubmit = () => {
    setShowModal(false);
    // Add logic to handle form submission here
  };

  return (
    <div className="flex min-h-screen bg-[#f9f9f9] font-sans text-sm text-[#1a1a1a]">
      {/* Sidebar */}
      <SidebarDashboard activeItem={1} />

      {/* Main Content */}
      <main className="flex-1 px-10 pt-8 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[20px] font-semibold">CML Micro</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="border px-4 py-2 rounded text-sm font-medium hover:bg-gray-100"
            >
              Schedule an appointment
            </button>
            <button className="border px-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
              Remove my exhibitor
            </button>
          </div>
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-6 mb-6">
          <p className="text-[1rem] leading-6">
            301 N, Main St, Suite 2206,<br />
            Winston Salem, NC 27101,<br />
            (333) 830-1075, USA.<br /><br />
            IOA FUTUNA,<br />
            ifurtuna@cuimicro.com
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <p className="font-semibold mb-1">Exhibitor type</p>
            <p className="text-gray-500">Matched</p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <p className="font-semibold mb-1">Appointment details</p>
            <p className="text-gray-500">None</p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <p className="font-semibold mb-1">Product categories</p>
            <p className="text-gray-500">None</p>
          </div>
          <div className="border rounded-lg p-4 bg-white shadow-sm flex justify-between items-center">
            <div>
              <p className="font-semibold mb-1">Notes</p>
              <p className="text-gray-500">None</p>
            </div>
            <button className="border px-3 py-1 rounded text-sm hover:bg-gray-100">Add note</button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-100 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <div className="mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-3">
                  📁
                </div>
                <h2 className="text-lg font-semibold">Request an appointment</h2>
                <p className="text-sm text-gray-500">Select a day and time</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Select day</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border px-3 py-2 mt-1 rounded"
                  >
                    <option>Sunday Jun 15, 2025</option>
                    <option>Monday Jun 16, 2025</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Start time</label>
                    <select
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full border px-3 py-2 mt-1 rounded"
                    >
                      <option>8.00 AM</option>
                      <option>9.00 AM</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">End time</label>
                    <select
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full border px-3 py-2 mt-1 rounded"
                    >
                      <option>11.00 AM</option>
                      <option>12.00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border rounded hover:bg-gray-100 text-sm"
                  >Cancel</button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
                  >Submit request</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CMLMicro;
