import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";
import SidebarDashboard from "../components/SidebarDashboard";
import { useNavigate } from "react-router-dom";

const ExhibitorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const companyDetails = [
    "Unlocking The Potential of Ingredient-let Beauty in Latin America",
    "Crafting Great Products",
    "Beauty Bytes: Build & Scale Your Brand Digitally",
    "How to Build a Winning Influencer Marketing Strategy",
    "Activating Beauty Trends: How to build a responsive global marketing organization using AI+ HI",
  ];

  const statusIcons = [
    <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-gray-200">
      <svg
        className="h-4 w-4 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    </div>,
    <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-green-100">
      <svg
        className="h-4 w-4 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </div>,
    <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-yellow-100">
      <svg
        className="h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>,
    <div className="w-6 h-6 inline-flex items-center justify-center rounded-full me-2 bg-red-100">
      <svg
        className="h-4 w-4 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 15" />
      </svg>
    </div>,
  ];

  
  const navigate = useNavigate();

  const handleCMLMicro = () => {
    navigate("/cmlmicro");
  };


  return (
    <div className="flex min-h-screen bg-[#f9f9f9] font-sans text-sm text-[#1a1a1a]">
      {/* Sidebar */}
      <SidebarDashboard activeItem={3} />

      <main className="flex-1 px-10 pt-8 pb-16">
        <h1 className="text-[20px] font-semibold mb-4">Exhibitors</h1>

        <div className="flex items-center gap-3 mb-4">
          <button className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm">
            My Exhibitors
          </button>
          <button className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium text-sm">
            All Exhibitors
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="bg-gray-100 px-2 py-1 rounded">
                You have 47 Exhibitors that you haven't viewed or requested an
                appointment with yet.
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border px-4 py-2 pl-10 rounded text-sm"
              />
              <FiSearch className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>
            <button className="border px-3 py-2 rounded flex items-center gap-2 text-sm hover:bg-gray-100">
              <BsCalendar2Check className="w-4 h-4" /> Schedule an appointment
            </button>
            <button className="border px-3 py-2 rounded flex items-center gap-2 text-sm hover:bg-gray-100">
              <MdDeleteOutline className="w-4 h-4" /> Remove my exhibitor
            </button>
          </div>

          <div className="overflow-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left bg-gray-50 text-gray-600">
                  <th className="p-2">
                    <input type="checkbox" />
                  </th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Company</th>
                  <th className="p-2">Product categories</th>
                  <th className="p-2">Content</th>
                  <th className="p-2">Source</th>
                  <th className="p-2">Note</th>
                  <th className="p-2">Booth</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2">
                      {statusIcons[i % statusIcons.length]}
                    </td>
                    <td className="p-2 text-indigo-600 underline" onClick={handleCMLMicro}>
                      {companyDetails[i % companyDetails.length]}
                    </td>
                    <td className="p-2 text-gray-500">None</td>
                    <td className="p-2">M</td>
                    <td className="p-2">M</td>
                    <td className="p-2">None</td>
                    <td className="p-2">{2548 - i * 3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
            <span>Page 1 of 10</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                Previous
              </button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 mt-4 border-t pt-3">
            <span>{statusIcons[3]} New time proposed</span>
            <span>{statusIcons[1]} Confirmed</span>
            <span>{statusIcons[0]} None</span>
            <span>{statusIcons[2]} Pending</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExhibitorsPage;
