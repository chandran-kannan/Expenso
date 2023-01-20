import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginScreen from '../Pages/Login';
import WelcomeScreen from "../Pages/WelcomeScreen";
import ForgotPassword from "../Pages/ForgotPassword";
import Register from '../Pages/Register/Register';
import Verification from '../Pages/Register/verification';
import HomeScreen from '../Pages/HomeScreen';

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
