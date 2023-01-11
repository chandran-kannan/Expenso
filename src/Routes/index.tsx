import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomeScreen from '../Pages/Register/WelcomeScreen';

const RoutesWrapper = () => {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<WelcomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
