import { useNavigate } from "react-router-dom";
import SidebarLarge from "../components/SidebarLarge";

export default function RegistrationConfirmationPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/regtools");
  };

  const confirmations = [
    {
      regNo: "1157943",
      name: "Robinson",
      type: "Non-Member",
      company: "Company name",
      price: 195.0,
    },
    {
      regNo: "1157943",
      name: "Arun",
      type: "Non-Member",
      company: "Company name",
      price: 1060.0,
    },
    {
      regNo: "1157943",
      name: "Alex",
      type: "Non-Member",
      company: "Company name",
      price: 1925.0,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden p-6 md:p-10 lg:p-14 justify-center items-center bg-gray-100">
      {/* Static Sidebar */}
      <SidebarLarge />

      {/* Main Content */}
      <div className="w-1/2 h-full overflow-y-auto bg-white px-8 py-10 rounded-2xl">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl mb-4">
                ✓
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Registration Confirmation
            </h2>
            <p className="text-sm text-gray-500">
              Thank you. You have successfully completed your registration
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {confirmations.map((user, i) => (
              <div
                key={i}
                className="border border-blue-100 rounded-xl p-4 shadow-sm bg-white"
              >
                <div className="text-sm text-gray-500">
                  Reg No - {user.regNo}
                </div>
                <div className="font-semibold">
                  {user.name} / {user.type}
                </div>
                <div className="text-sm text-gray-500 mb-2">{user.company}</div>
                <div className="text-2xl font-bold text-black">
                  ${user.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
              onClick={handleContinue}
            >
              Go to registration dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
