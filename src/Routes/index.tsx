import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomeScreen from '../Pages/Register/WelcomeScreen';

import Button from '../Components/Button';
import ForgotPassword from '../Pages/ForgotPassword';

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
