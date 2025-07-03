import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import SidebarExpanded from '../components/SidebarExpanded';
import PersonalInfoForm from '../components/PersonalInfoForm';

export default function PersonalInfo() {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/demographic");
  };



  return (
    <div className="flex h-screen overflow-hidden bg-gray-50  max-w-[1720px] mx-auto justify-center w-full  ">
      {/* Sidebar */}
      <SidebarExpanded />

      {/* Main content */}
      <div className="flex-1 transition-all duration-500 ">

        <div className='max-w-[950px] mx-auto w-full bg-white shadow-lg p-6 md:p-10 lg:p-12 overflow-y-auto h-full'>

        {/* Stepper */}
        <Stepper activeItem={1} />

        <h2 className="text-xl font-semibold">Personal information</h2>
        <div className="max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          *are required to continue
        </div>

        <PersonalInfoForm />

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-10 mb-10">
          <button className="px-6 py-2 bg-blue-600 text-white rounded" onClick={handleContinue}>Continue</button>
        </div>
      </div>

      </div>
    </div>
  );
}
