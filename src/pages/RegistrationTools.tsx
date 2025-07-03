import React from "react";
import { Pencil, Activity } from "lucide-react";
import SidebarDashboard from "../components/SidebarDashboard";

const RegistrationTools: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#f9f9f9] font-sans text-sm text-[#1a1a1a]">
      {/* Sidebar */}
      <SidebarDashboard activeItem={2} />

      {/* Main Content */}
      <main className="flex-1 px-10 pt-8 pb-16">
        <h1 className="text-[20px] font-semibold mb-6">Registration tools</h1>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 border-b border-gray-300 pb-3 overflow-x-auto text-sm">
          {[
            "Registration",
            "Demographic",
            "Session and event",
            "Payment",
            "Hotel information",
            "Invite a colleague",
          ].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-1 rounded ${
                tab === "Registration"
                  ? "bg-gray-100 text-black font-medium"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded bg-white text-sm">
            <Pencil className="w-4 h-4" /> Edit information
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded bg-white text-sm">
            <Activity className="w-4 h-4" /> Registration activity
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm">
            Resend confirmation
          </button>
        </div>

        {/* Info + Badge Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between shadow-sm">
          {/* Info */}
          <div className="max-w-[60%] text-[1rem]">
            <p className="font-bold">Robinson</p>
            <p>Robinson@gmail.com</p>
            <p className="mt-1">
              1318, Algonquin, South Elgin, IL 60177, United States
            </p>
            <p className="mt-1">P: (122) 6302292333</p>

            <div className="mt-4">
              <p className="font-semibold">Additional registrations</p>
              <ul className="text-indigo-600 space-y-1 mt-1">
                <li>
                  <a href="#">View (Name)</a>
                </li>
                <li>
                  <a href="#">View (Name)</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Badge */}
          <div className="text-white rounded-xl w-[480px] text-center flex flex-col items-center justify-center border border-gray-200 shadow-lg">
            <p className="text-3xl mb-2 bg-black rounded-t-xl p-8 w-full">
              Sample Badge
            </p>

            <div className="bg-white text-black rounded w-full py-4 px-2 text-[1.1rem]">
              <p className="font-bold">Robinson</p>
              <p>Robinson@gmail.com</p>
              <p className="mt-1 leading-tight">
                1318, Algonquin, South Elgin,
                <br />
                IL 60177, United States
              </p>
            </div>

            <p className="mt-4 text-xs font-medium bg-black rounded-b-xl p-8 w-full">
              Exhibit Only Non-Member
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default RegistrationTools;
