import React from "react";
import Tab from "../../Components/Tab";
import Shopping from "../../Components/Shopping";
import AccountBalance from "../../Components/Accountbalance";
import Card from "../../Components/Card";

const HomeScreen = () =>
{
    return(
        <div className="">
       <div className="bg-homescreen rounded-br-bl-32px py-30px-px-15px">
            <AccountBalance title="Account Balance" amount="$9400" />
            <div className="flex justify-between items-center">
            <Card image="src/assets/images/income.png" desc="Income" styleName="bg-green" amount="$5000" />
            <Card image="src/assets/images/Expense.png" desc="Expenses" styleName="bg-red" amount="$1200" />
            </div>
       </div>
        <Tab /> 
        </div>
    )
}

export default HomeScreen;