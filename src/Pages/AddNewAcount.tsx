import React from 'react';
import DropDownBox from '../Components/DropDown/DropDownBox';
interface prop {
  balance: string;
}

const AddNewAcount = ({ balance }: prop) => {
  const accountType: string[] = ['Current', 'Savings'];
  return (
    <div className="w-375 flex-col primary-100 primary-100">
      <div className="p-16">
        <span className="fs-18 text-milk-white opacity-64">Balance</span>
        <br />
        <span className="fs-64 text-milk-white">${balance}</span>
      </div>
      <div className="white rounded-t-32 p-16 pt-24">
        <input
          type="text"
          placeholder="Name"
          className="flex items-center w-343 justify-between border-1 h-56 p-16 rounded-16 relative mb-16"
        />
        <DropDownBox options={accountType} />
        <button className="w-343 border-1 h-56 p-16 rounded-16 mt-40 primary-100 text-milk-white">
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddNewAcount;
