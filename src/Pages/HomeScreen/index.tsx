import React from "react";
import Tab from "../../Components/Tab";
import Shopping from "../../Components/Shopping";
import AccountBalance from "../../Components/Accountbalance";
import Card from "../../Components/Card";
import UserAvatar from "../../Components/UserAvatar";
import Notification from "../Notification";
import BottomNavigation from "../../Components/BottomNavigation";
import { useNavigate } from "react-router-dom";

const HomeScreen = () =>
{
    const navicate = useNavigate();

    const clicktoNotify = ()=>
    {
        navicate('/notification')
    }
    return(
        <div className="">
            <UserAvatar src="https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png" name="Albert John"
             className="w-32px h-32px absolute l-10px t-10px outline-1px-blue" />
              <div className="absolute r-10px t-10px">
                <img onClick={clicktoNotify} className="w-22px h-25px" src="src/assets/images/notifiaction.png" alt="Notification" />
              </div>
       <div className="bg-homescreen rounded-br-bl-32px py-30px-px-15px">
            <AccountBalance title="Account Balance" amount="$9400" />
            <div className="flex justify-between items-center">
            <Card image="src/assets/images/income.png" desc="Income" styleName="bg-green" amount="$5000" />
            <Card image="src/assets/images/Expense.png" desc="Expenses" styleName="bg-red" amount="$1200" />
            </div>
       </div>
        <Tab /> 
        <BottomNavigation />
        </div>
    )
}

export default HomeScreen;