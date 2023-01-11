import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LeftArrow } from '../../assets/Icons';
import { Mail } from '../../assets/Images';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import Input from '../../Components/Input';
import { regexEmailValidation } from '../../Utils/Regex';

const ForgotPassword = () => {
  const [showEmailSentScreen, setShowEmailSentScreen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target?.value);
  };
  return (
    <div className="flex items-center justify-start h-full flex flex-col">
      {showEmailSentScreen ? (
        <div className="flex flex-col items-center h-full w-full">
          <div className="w-326px h-312px flex items">
            <img src={Mail} alt="Mail-Png" className="object-fit-contain" />
          </div>
          <div className="w-343px text-center mt-24px">
            <p className="font-600 fs-24px">Your email is on the way</p>
            <p className="h-57px fs-16px font-500 mt-24px mb-auto lh-1-6">
              Check your email test@test.com and follow the instructions to reset your password
            </p>
          </div>
          <div className="mb-16px mt-auto">
            <Link to="/">
              <Button type="submit" variant="primary" children="Back to Login" />
            </Link>
          </div>
        </div>
      ) : (
        <form
          className="flex flex-col items-center"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            regexEmailValidation(email) && setShowEmailSentScreen(true);
          }}
        >
          <div className="flex items-center w-343px h-64px">
            <Header
              title="Forgot Password"
              leftIcon={<LeftArrow width={24} height={16} />}
              className=""
            />
          </div>
          <div className="w-343px fs-24px text-black font-600 mt-69px">
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
            <Button type="submit" variant="primary" children="Continue" />
          </span>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
