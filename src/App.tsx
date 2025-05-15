import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PersonalInfo from "./pages/PersonalInfo";
import Demographic from "./pages/Demographic";
import RegCategory from "./pages/RegCategory";
import SessionsEvent from "./pages/SessionsEvent";
import ReviewInfo from "./pages/ReviewInfo";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import MySchedule from "./pages/MySchedule";
import Exhibitors from "./pages/Exhibitors";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Routes with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/demographic" element={<Demographic />} />
          <Route path="/regcategory" element={<RegCategory />} />
          <Route path="/sessions-event" element={<SessionsEvent />} />
          <Route path="/review-info" element={<ReviewInfo />} />
          <Route path="/my-schedule" element={<MySchedule />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
