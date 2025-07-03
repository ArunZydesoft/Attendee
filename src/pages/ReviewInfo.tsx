import { useNavigate } from 'react-router-dom';
import SidebarExpanded from '../components/SidebarExpanded';
import Stepper from '../components/Stepper';

export default function ReviewInformationPage() {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/payment");
  };

  const handleBack = () => {
    navigate("/workshop");
  };

  const tabs = [
    'Registration information',
    'Demographic information',
    'Session & Event information',
    'Payment Information',
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50  max-w-[1720px] mx-auto justify-center w-full  ">
      {/* Sidebar */}
      <SidebarExpanded />

      {/* Main content */}
      <div className="flex-1 transition-all duration-500 ">
        <div className="max-w-[1250px] mx-auto w-full bg-white shadow-lg p-6 md:p-10 lg:p-12 overflow-y-auto h-full">
        {/* Stepper */}
        <Stepper activeItem={6} />

        <h2 className="text-xl font-semibold mb-2">Review information</h2>
        <p className="text-sm text-gray-600 mb-6">
          Note! Please take a moment to review your registration information below. If the information is correct click Finish. If you need to add additional registrations, click Add another registrant. If you need to change any of the information, click the edit information button in the section you need to change, make your changes, then re-submit that page to update your information.
        </p>

        {/* Tabs */}
        <div className="flex gap-3 flex-wrap mb-6">
          {tabs.map((tab, i) => (
            <button key={i} className="px-4 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
              {tab}
            </button>
          ))}
        </div>

        {/* Review Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-sm">Robinson</h3>
              <p className="text-sm text-gray-600">Robinson@gmail.com</p>
              <p className="text-sm text-gray-600 mt-2">1318, Algonquin, South Elgin, IL 60177, United States</p>
              <p className="text-sm text-gray-600 mt-1">P: (122) 6302923333</p>
            </div>
            <button className="text-sm px-3 py-1 rounded border text-gray-700 hover:bg-gray-50">✏️ Edit</button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button className="px-6 py-2 border rounded" onClick={handleBack}>Back</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded" onClick={handleContinue}>Finish</button>
        </div>

      </div>
      </div>
    </div>
  );
}
