import { useNavigate } from 'react-router-dom';
import SidebarExpanded from '../components/SidebarExpanded';
import Stepper from '../components/Stepper';

export default function PaymentInformationPage() {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/registrationConfirmation");
  };


  return (
    <div className="flex h-screen overflow-hidden bg-gray-50  max-w-[1720px] mx-auto justify-center w-full  ">
      {/* Sidebar */}
      <SidebarExpanded />

      {/* Main content */}
      <div className="flex-1 transition-all duration-500 ">

        <div className='max-w-[950px] mx-auto w-full bg-white shadow-lg p-6 md:p-10 lg:p-12 overflow-y-auto h-full'>
        {/* Stepper */}
        <Stepper activeItem={7} />

        <h2 className="text-xl font-semibold mb-2">Payment information</h2>
        <p className="text-sm text-gray-600 mb-6 max-w-3xl">
          Note! All registration fees will be applied to the card below. By submitting this registration, I authorize International Microwave Symposium 2025 to charge my credit card account the applicable fees for the registration(s)/badge request(s) I processed during this online session.
        </p>

        {[{
          title: 'User name 1',
          items: [
            { name: 'Exhibits only pass', qty: 1, price: 30 },
            { name: 'Space borne and ground based submillimeter wave and terahertz science instruments', qty: 1, price: 165 },
          ]
        }, {
          title: 'User name 2 / Non - Member',
          items: [
            { name: 'Exhibits only pass', qty: 1, price: 200 },
            { name: 'Wireless power technologies', qty: 1, price: 390 },
            { name: 'Monday boxed lunch', qty: 1, price: 45 },
          ]
        }].map((user, idx) => (
          <div key={idx} className="bg-white border rounded-xl shadow mb-6">
            <div className="border-b p-4 font-semibold">{user.title}</div>
            {user.items.map((item, i) => (
              <div key={i} className="px-4 py-2 grid grid-cols-12 gap-4 text-sm border-t items-center">
                <span className="col-span-8">{item.name}</span>
                <span className="col-span-2 text-center">{item.qty}</span>
                <span className="col-span-2 text-right">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="text-right font-semibold text-lg mb-6">Total Fees <span className="ml-2">$840.00</span></div>

        {/* Payment Form */}
        <div className="bg-white border rounded-xl shadow p-6 mb-10">
          <h3 className="font-semibold mb-4">Pay with</h3>
          <div className="flex gap-2 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-5" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" className="h-5" alt="Mastercard" />
          </div>
          <div className="space-y-4">
            <input placeholder="Card number" className="w-full border px-4 py-2 rounded" defaultValue="7857" />
            <div className="flex gap-4">
              <input placeholder="Expiration" className="flex-1 border px-4 py-2 rounded" />
              <input placeholder="CVV" className="flex-1 border px-4 py-2 rounded" />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button className="px-6 py-2 border rounded w-1/4">Cancel</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded w-2/4" onClick={handleContinue}>Pay now</button>
        </div>
      </div>
      </div>
    </div>
  );
}
