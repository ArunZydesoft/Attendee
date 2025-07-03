import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import SidebarExpanded from "../components/SidebarExpanded";
import DemographicForm from "../components/DemographicForm";

export default function DemographicInfoPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/regcategory");
  };

  const handleBack = () => {
    navigate("/personal-info");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50  max-w-[1720px] mx-auto justify-center w-full  ">
      {/* Sidebar */}
      <SidebarExpanded />

      {/* Main content */}
      <div className="flex-1 transition-all duration-500 ">
        <div className="max-w-[950px] mx-auto w-full bg-white shadow-lg p-6 md:p-10 lg:p-12 overflow-y-auto h-full">
          {/* Stepper */}
          <Stepper activeItem={2} />

          <h2 className="text-xl font-semibold mb-6">
            Demographic information
          </h2>

          <DemographicForm />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 mb-10">
            <button className="px-6 py-2 border rounded" onClick={handleBack}>
              Back
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
