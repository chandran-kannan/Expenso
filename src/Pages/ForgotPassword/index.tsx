import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftArrow } from '../../assets/Icons';
import { Mail } from '../../assets/Images';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import Input from '../../Components/Input';

const ForgotPassword = () => {
  const [showScreen, setShowScreen] = useState<boolean>(true);
  const [submit, setSubmit] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmit(e.target?.value);
  };
  return (
    <div className="flex items-center justify-start h-full flex flex-col">
      {showScreen ? (
        <form
          className="flex flex-col items-center"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
          }}
        >
          <div className="flex items-center w-343px h-64px">
            <Header
              title="Forgot Password"
              leftIcon={<LeftArrow width={24} height={16} />}
              className=""
            />
          </div>
          <div className="w-343px font-size-24px text-black font-600 mt-69px">
            <span>Don’t worry.</span>
            <br />
            <span>Enter your email and we’ll send you a link to reset your password.</span>
          </div>
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Email"
              className="mt-45px fs-18px"
              onChange={handleChange}
            />
          </div>
          <span className="flex mt-32px">
            <Button
              variant="primary"
              children="Continue"
              onClick={() => {
                let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
                regex.test(submit) && setShowScreen(false);
              }}
            />
          </span>
        </form>
      ) : (
        <>
          <div className="w-326px h-312px flex items">
            <img src={Mail} alt="Mail-Png" className="object-fit-contain" />
          </div>
          <div className="text-center mt-24px">
            <p className="font-600 font-size-24px">Your email is on the way</p>
            <p className="h-57px fs-16px font-500 mt-24px mb-auto lh-1-6">
              Check your email test@test.com and follow the instructions to reset your password
            </p>
          </div>
          <div className="mt-auto mb-16px">
            <Link to="/">
              <Button variant="primary" children="Back to Login" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
