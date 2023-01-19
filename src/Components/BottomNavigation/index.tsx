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
    <div className="mt-200px flex">
      <div className="flex justify-evenly bg-primary w-187px border-top-right-radius-38px border-top-left-radius-10px">
        <div className="flex flex-col items-center">
          <Home fill="#C6C6C6" className="w-24px h-24px" />
          <span className="fs-10px text-shade-grey font-500">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <Piechart fill="#C6C6C6" className="w-24px h-24px" />
          <span className="fs-10px text-shade-grey font-500">Transaction</span>
        </div>
      </div>

      <div className="border-bottom-40px border-top-radius-38px bg-primary border-top-right-radius-37px border-top-left-radius-37px">
        <button
          onClick={handleHomeButton}
          className="border-none pointer transform-10px  bg-primary border-w-5px border-bg-secondary border-style-solid flex items-center justify-center rounded-50per w-80px h-80px"
        >
          {changeIcon === true ? (
            <Delet fill="white" className="w-24px h-24px" />
          ) : (
            <Add className="w-24px h-24px" />
          )}
          {changeIcon && (
            <div className="flex absolute b-95px l-49px gap-55px">
              <button className="border-none pointer p-12px flex items-center justify-center  bg-green  rounded-50per  w-56px h-56px">
                <Income fill="white" className="h-24px w-24px" />
              </button>
              <div className="absolute b-67px l-50px">
                <button className="border-none pointer p-12px flex items-center justify-center bg-blue rounded-50per w-56px h-56px">
                  <MoneyExchange fill="white" className="h-24px w-24px" />
                </button>
              </div>
              <button className="border-none pointer bg-red flex items-center justify-center rounded-50per w-56px h-56px ">
                <Outcome fill="white" className="h-24px w-24px" />
              </button>
            </div>
          )}
        </button>
      </div>

      <div className="flex justify-evenly  bg-primary w-187px border-top-right-radius-10px border-top-left-radius-38px">
        <div className="flex flex-col items-center">
          <Transaction fill="#C6C6C6" className="w-24px h-24px" />
          <span className="fs-10px text-shade-grey font-500">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <User fill="#C6C6C6" className="w-24px h-24px" />
          <span className="fs-10px text-shade-grey font-500">Transaction</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
