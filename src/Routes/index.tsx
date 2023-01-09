import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomeScreen from '../Pages/Register/WelcomeScreen';
import UserAvatar from '../Components/UserAvatar';


const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserAvatar src="" alt="" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
