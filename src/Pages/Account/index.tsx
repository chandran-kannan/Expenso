import React, { useContext } from "react";
import { LeftArrow } from "../../assets/Icons";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { Context } from "../../Store";
import { useNavigate } from "react-router-dom";
type spendType = {
  category?: string;
  amountSpend?: number;
};
type bankDetails = {
  name: string;
  icon: string;
  amount: number;
  spend: spendType;
};
const Account = () => {
  const { bankDetail } = useContext(Context);
  console.log(bankDetail, "details");
  const navigate = useNavigate();
  ///convert object to string because of new set work in primitive data type

  const bankStr: string[] = bankDetail.map(JSON.stringify);
  const bank = new Set(bankStr);
  /// after that we convert that to object
  const addBankDetails: bankDetails[] = Array.from(bank).map((obj: string) => JSON.parse(obj));
  console.log(addBankDetails, "ttiy");

  const totalAmount = addBankDetails
    .map((el: bankDetails) => el?.amount)
    .reduce((accumulator: number, currentValue: number) => {
      return accumulator + currentValue;
    }, 0);

  return (
    <div className="h-full w-full flex flex-col">
      <div className=" flex flex-col ml-auto mr-auto w-311px gap-auto ">
        <div className="w-343px  h-56px flex  items-center ml-auto mr-auto   ">
          <Header
            title={"Account"}
            className=" flex"
            leftIcon={<LeftArrow className="h-16px w-24px" />}
          />
        </div>
      </div>
      <div className="bg-img bg-no-repeat bg-size flex justify-center items-center w-full h-170px mt-10px flex-col">
        <h5 className="  opacity-05">Account Balance</h5>
        <h2 className=" font-600 fs-32px">${totalAmount}</h2>
      </div>

      {addBankDetails.map((e: bankDetails, index: number) => (
        <div key={index} className="h-80px w-full border-b-grey flex  items-center justify-around">
          <div className="h-44px w-50per flex items-center gap-16px ">
            <div className="h-40px w-70px flex justify-center items-center border-none bg-light-gray rounded-10px">
              <img src={e.icon} />
            </div>
            <span className="font-600 fs-18px">{e.name}</span>
          </div>
          <div className="font-600 fs-18px">${e.amount}</div>
        </div>
      ))}
      <Button
        variant="primary"
        children="+ Add new wallet"
        className="ml-auto mr-auto mb-16px mt-auto"
        onClick={() => navigate("/addaccount")}
      />
    </div>
  );
};

export default Account;
