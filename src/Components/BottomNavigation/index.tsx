import { useState } from "react";
import {
  Add,
  Delet,
  Home,
  Income,
  MoneyExchange,
  Outcome,
  Piechart,
  Transaction,
  User
} from "../../assets/Icons";

const BottomNavigation = () => {
  const [changeIcon, setChangeIcon] = useState<boolean>(false);

  const handleHomeButton = () => {
    setChangeIcon((prev) => !prev);
  };
  return (
    <div className="mt-20px flex fixed w-full b-0">
      <div className="flex justify-evenly pointer bottom-nav-bg w-187px border-top-right-radius-18px border-top-left-radius-10px">
        <div className="flex flex-col items-center justify-evenly">
          <Home fill="#C6C6C6" className="w-24px" />
          <span className="fs-10px text-shade-grey font-500">Home</span>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <Piechart fill="#C6C6C6" className="w-24px" />
          <span className="fs-10px text-shade-grey font-500">Transaction</span>
        </div>
      </div>

      <div className="border-bottom-40px border-top-radius-38px bottom-nav-bg border-top-right-radius-30px border-top-left-radius-30px">
        <button
          onClick={handleHomeButton}
          className="border-none pointer transform-17px  bg-primary border-w-5px 
          border-bg-white border-style-solid flex items-center justify-center rounded-50per w-80px h-80px"
        >
          {changeIcon === true ? (
            <Delet fill="white" className="w-24px" />
          ) : (
            <Add fill="white" className="w-24px" />
          )}
          {changeIcon && (
            <div className="flex absolute b-95px l-49px gap-55px">
             <div className="absolute l-130px b-5px">
             <button className="border-none pointer p-12px flex items-center justify-center  bg-green  rounded-50per  w-56px h-56px">
                <Income fill="white" className="w-24px" />
              </button>
             </div>
              <div className="absolute b-67px l-50px">
                <button className="border-none pointer p-12px flex items-center justify-center bg-blue rounded-50per w-56px h-56px">
                  <MoneyExchange fill="white" className="w-24px" />
                </button>
              </div>
             <div className="absolute l-20px b-5px">
             <button className="border-none pointer bg-red flex items-center justify-center rounded-50per w-56px h-56px ">
                <Outcome fill="white" className="w-24px" />
              </button>
             </div>
            </div>
          )}
        </button>
      </div>

      <div className="flex justify-evenly pointer  bottom-nav-bg w-187px border-top-right-radius-10px border-top-left-radius-18px ">
        <div className="flex flex-col items-center justify-evenly">
          <Transaction fill="#C6C6C6" className="w-24px " />
          <span className="fs-10px text-shade-grey font-500">Budget</span>
        </div>
        <div className="flex flex-col items-center justify-evenly">
          <User fill="#C6C6C6" className="w-24px" />
          <span className="fs-10px text-shade-grey font-500">Transaction</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
