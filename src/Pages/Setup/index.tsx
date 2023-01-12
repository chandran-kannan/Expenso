import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Setup = () => {
  return (
    <div className="h-full pt-67px mx-16px flex flex-col">
      <h1 className=" w-343px h-88px  font-600 font-size-36px ">Let’s setup your account!</h1>
      <h4 className="w-343px  mt-37px h-56px font-500 font-siz-14px">
        Account can be your bank, credit card or your wallet.
      </h4>
      <div className="mt-auto mb-16px">
        <Link to="/addaccount">
          <Button variant="primary" children="Let’s go" />
        </Link>
      </div>
    </div>
  );
};

export default Setup;
