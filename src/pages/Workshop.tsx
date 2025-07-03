import { useNavigate } from 'react-router-dom';
import SidebarExpanded from '../components/SidebarExpanded';
import Stepper from '../components/Stepper';
import WorkShopForm from '../components/WorkshopForm';

export default function WorkshopPage() {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/review-info");
  };
  
  const handleBack = () => {
    navigate("/sessions-event");
  };

  
  return (
    <div className="flex h-screen  bg-gray-50  max-w-[1720px] mx-auto justify-center w-full  ">
      {/* Sidebar */}
      <SidebarExpanded />

      {/* Main content */}
      <div className="flex-1 transition-all duration-500 ">
        <div className='max-w-[1150px] mx-auto w-full bg-white shadow-lg p-6 md:p-10 lg:p-12 overflow-y-auto h-full'>
        
        {/* Stepper */}
        <Stepper activeItem={5} />

        {/* Session and Events */}
        <WorkShopForm  />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 border rounded" onClick={handleBack}>Back</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded" onClick={handleContinue}>Continue</button>
        </div>

      </div>
      </div>
    </div>
  );
}
