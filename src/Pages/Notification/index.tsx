import React, { useState } from "react";
import Header from "../../Components/Header";
import { LeftArrow, MenuNotification } from "../../assets/Icons";

const Notification = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [readMessage, setReadMessage] = useState<boolean>(false);
  const [removeAll, setRemoveAll] = useState<boolean>(false);

  const handleMenuIcon = () => {
    setShowMenu((prev) => !prev);
  };
  const handleMessageRead = () => {
    setReadMessage((prev) => !prev);
  };
  const handleRemoveAll = () => {
    setRemoveAll(true);
  };

  return (
    <div>
      <div className="mt-44px mb-20px relative">
        <Header
          leftIcon={<LeftArrow className="w-24px h-24px" />}
          title="Notification"
          rightIcon={
            <button onClick={handleMenuIcon} className="border-none bg-transparent pointer">
              <MenuNotification className="w-24px h-24px" />
              {showMenu && (
                <div className="flex flex-col absolute r-13px">
                  <button
                    onClick={handleMessageRead}
                    className=" w-134px h-49px bg-white fs-14px font-400 text-black border-none box-shadow-4px pointer"
                  >
                    Mark all read
                  </button>
                  <button
                    onClick={handleRemoveAll}
                    className="w-134px h-49px bg-white fs-14px font-400 text-black border-none box-shadow-4px pointer"
                  >
                    Remove all
                  </button>
                </div>
              )}
            </button>
          }
        />
      </div>
      {!removeAll && (
        <div className=" flex-col  flex ">
          <div className="flex flex-col pl-20px mt-10px bg-white box-shadow w-375px h-71px ">
            <p
              className={`text-ellipsis white-space overflow-x-hidden fs-16px font-500  ${
                readMessage ? "text-grey2" : " text-black-2 "
              } `}
            >
              Shopping budget has exceeds the Shopping budget has 
            </p>
            <div className="flex">
              <span
                className={`text-ellipsis white-space overflow-x-hidden fs-12px  font-500 mt-10px  ${
                  readMessage ? "text-grey2" : " text-black-2 "
                } `}
              >
                Your Shopping budget has exceeds the lim Your Shopping budget has exceeds the lim
           
              </span>
              <span
                className={`ml-60px fs-12px  font-500  ${
                  readMessage ? "text-grey2" : " text-black-2 "
                } `}
              >
                10:00
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
