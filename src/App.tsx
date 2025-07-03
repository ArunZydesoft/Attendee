import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PersonalInfo from "./pages/PersonalInfo";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import MySchedule from "./pages/MySchedule";
import Exhibitors from "./pages/Exhibitors";
import DemographicInfoPage from "./pages/Demographic";
import RegistrationOptionsPage from "./pages/RegCategory";
import SessionEventsPage from "./pages/SessionsEvent";
import WorkshopPage from "./pages/Workshop";
import ReviewInformationPage from "./pages/ReviewInfo";
import PaymentInformationPage from "./pages/PaymentInformation";
import RegistrationConfirmationPage from "./pages/RegistrationConfirmation";
import RegistrationTools from "./pages/RegistrationTools";
import CMLMicro from "./pages/CMLMicro";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Routes with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/registrationConfirmation"
            element={<RegistrationConfirmationPage />}
          />
        </Route>

        {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/demographic" element={<DemographicInfoPage />} />
          <Route path="/regcategory" element={<RegistrationOptionsPage />} />
          <Route path="/sessions-event" element={<SessionEventsPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="/review-info" element={<ReviewInformationPage />} />
          <Route path="/payment" element={<PaymentInformationPage />} />

          <Route path="/regtools" element={<RegistrationTools />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/cmlmicro" element={<CMLMicro />} />
          <Route path="/my-schedule" element={<MySchedule />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
