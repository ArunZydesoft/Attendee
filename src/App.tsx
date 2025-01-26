import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PersonalInfo from "./pages/PersonalInfo";
import Demographic from "./pages/Demographic";
import RegCategory from "./pages/RegCategory";
import SessionsEvent from "./pages/SessionsEvent";
import ReviewInfo from "./pages/ReviewInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/demographic" element={<Demographic />} />
        <Route path="/regcategory" element={<RegCategory />} />
        <Route path="/sessoinsevent" element={<SessionsEvent />} />
        <Route path="/reviewinfo" element={<ReviewInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
