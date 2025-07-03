import { Calendar, FileText, Home, Users } from "lucide-react";
import partner1Img from "../assets/img/partner1.png";
import partner2Img from "../assets/img/partner2.png";
import partner3Img from "../assets/img/partner3.png";
import { useNavigate } from "react-router-dom";

type StepperProps = {
    activeItem: number
}

export default function SidebarDashboard ({activeItem = 1}: StepperProps) {
  const navigate = useNavigate();

  const handleRegtools = () => {
    navigate("/regtools");
  };

  const handleExhibitor = () => {
    navigate("/exhibitors");
  };

  // const handleCmlMicro = () => {
  //   navigate("/cmlmicro");
  // };

  const handleMySchedule = () => {
    navigate("/my-schedule");
  };

  return (
    <aside className="w-[300px] bg-white border-r border-gray-200 flex flex-col justify-between py-6 px-6 shadow-sm">
      <div>
        <div className="bg-[#121212] rounded-lg text-white p-5 text-sm mb-10">
          <div className="flex items-center justify-start space-x-3 mb-3">
            <img src={partner1Img} className="w-15 h-10" alt="Image" />
            <img src={partner2Img} className="w-15 h-10" alt="Image" />
            <img src={partner3Img} className="w-15 h-10" alt="Image" />
          </div>
          <p className="text-[22px] text-base font-semibold">
            International Microwave Symposium
            <br />
            <span className="text-white font-bold text-base">2025</span>
          </p>
        </div>

        <div className="mb-8">
          <p className="font-semibold text-[15px] leading-tight">Robinson</p>
          <p className="text-[12px] text-gray-500 leading-tight">
            Badge ID - 1157953
          </p>
        </div>

        <nav className="flex flex-col gap-3 text-[15px]">
          <a
            className={`flex items-center gap-3 hover:text-black font-medium ${
              activeItem == 1 ? "text-indigo-600" : "text-gray-700"  
            }`}
            onClick={handleExhibitor}
          >
            <Home className="w-4 h-4" /> Home
          </a>

          <a
            className={`flex items-center gap-3 hover:text-black font-medium ${
              activeItem == 2 ? "text-indigo-600" : "text-gray-700"  
            }`}
            onClick={handleRegtools}
          >
            <FileText className="w-4 h-4" /> Registration Tools
          </a>
          <a
            className={`flex items-center gap-3 hover:text-black font-medium ${
              activeItem == 3 ? "text-indigo-600" : "text-gray-700"  
            }`}
            onClick={handleExhibitor}
          >
            <Users className="w-4 h-4" /> My Exhibitors
          </a>
          <a
            className={`flex items-center gap-3 hover:text-black font-medium ${
              activeItem == 4 ? "text-indigo-600" : "text-gray-700"  
            }`}
            onClick={handleMySchedule}
          >
            <Calendar className="w-4 h-4" /> My Schedule
            <span className="ml-auto bg-gray-200 text-gray-700 rounded-full px-2 text-[12px]">
              8
            </span>
          </a>
        </nav>
      </div>

      <div className="border-t border-gray-200 mt-10 pt-5">
        <p className="text-[13px] font-semibold mb-2">Support</p>
        <div className="flex items-center text-[13px] text-gray-600">
          <div className="w-6 h-6 rounded-full bg-gray-300 mr-2" />
          robin@gmail.com
        </div>
      </div>
    </aside>
  );
}
