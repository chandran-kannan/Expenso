import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import LoginScreen from '../Pages/Login';
import WelcomeScreen from "../Pages/WelcomeScreen";
import ForgotPassword from "../Pages/ForgotPassword";
<<<<<<< HEAD
import Register from '../Pages/Register/Register';
import Verification from '../Pages/Register/verification';
import HomeScreen from '../Pages/HomeScreen';
=======
import Notification from '../Pages/Notification';
import BottomNavigation from '../Components/BottomNavigation';
import Register from "../Pages/Register/Register";
import Verification from "../Pages/Register/verification";
import Setup from "../Pages/Setup";
import Pinset from "../Pages/Pinset";
import AddAccount from "../Pages/AddAccount";
import EnterPin from "../Pages/EnterPin";
import YouAreSet from "../Pages/YouAreSet";
>>>>>>> de31a5d26eb9225c424351fb80fcfa291ac6c6f7

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/Bottomnavigation" element={<BottomNavigation />} />
        <Route path="/" element={<WelcomeScreen />}></Route>
        <Route path="/pinset" element={<Pinset />}></Route>
        <Route path="/setup" element={<Setup />}></Route>
        <Route path="/addaccount" element={<AddAccount />}></Route>
        <Route path="/enterpin" element={<EnterPin />}></Route>
        <Route path="/youareset" element={<YouAreSet />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;