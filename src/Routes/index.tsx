import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomeScreen from '../Pages/Register/WelcomeScreen';
import Header from '../Components/Header';
import { LeftArrow } from '../assets/Icons';


const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header title='Sign Up' leftIcon={<LeftArrow/>} className="text-red"/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
