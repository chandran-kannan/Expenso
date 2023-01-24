import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginScreen from '../Pages/Login';
import WelcomeScreen from "../Pages/WelcomeScreen";
import ForgotPassword from "../Pages/ForgotPassword";
import Notification from '../Pages/Notification';

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/notification" element={<Notification />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;