import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginScreen from '../Pages/LoginScreen';
import WelcomeScreen from '../Pages/WelcomeScreen/index';

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/Log-In" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
