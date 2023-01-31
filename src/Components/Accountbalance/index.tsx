import React from "react";

function AccountBalance(props:any) 
{
    return (
        <div className="text-center mb-20px">
            <h4 className="text-light-grey fs-16px lh-25px font-500 mb-5px">{props.title}</h4>
            <h2 className="acc-amount-color fs-40px lh-48px font-600">{props.amount}</h2>
        </div>
    );
}

export default AccountBalance;