import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginScreen from '../Pages/LoginScreen';
import WelcomeScreen from "../Pages/WelcomeScreen";

import ForgotPassword from "../Pages/ForgotPassword";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
