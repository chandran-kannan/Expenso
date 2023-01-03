import React from 'react';
import DropDownBox from '../Components/DropDown/DropDownBox';

interface prop {
  balance: number;
}

const AddNewWallet = ({ balance }: prop) => {
  const paymentType: string[] = ['Bank', 'Upi', 'Card'];
  return (
    <div>
      <span>Balance</span>
      <br />
      <span>${balance}</span>
      <DropDownBox options={paymentType} />
    </div>
  );
};

export default AddNewWallet;
