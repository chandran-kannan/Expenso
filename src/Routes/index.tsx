import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import LoginScreen from "../Pages/Login";
import WelcomeScreen from "../Pages/WelcomeScreen";
import ForgotPassword from "../Pages/ForgotPassword";

import Button from "../Components/Button";
// import Pin from '../Pages/Pinset';
import Setup from "../Pages/Setup";
import Pinset from "../Pages/Pinset";
import AddAccount from "../Pages/AddAccount";
import EnterPin from "../Pages/EnterPin";
import YouAreSet from "../Pages/YouAreSet";

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<WelcomeScreen />}></Route>
        <Route path="/pinset" element={<Pinset />}></Route>
        <Route path="/setup" element={<Setup />}></Route>
        <Route path="/addaccount" element={<AddAccount />}></Route>
        <Route path="/enterpin" element={<EnterPin />}></Route>
        <Route path="/youareset" element={<YouAreSet />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
