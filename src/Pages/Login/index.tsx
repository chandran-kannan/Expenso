import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Header from '../../Components/Header';
import { LeftArrow } from '../../assets/Icons';

const Login = () => {
  const [values, setValues] = useState<{
    email: string;
    password: string;
    errorEmail: string;
    errorPassword: string;
  }>({
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
  });
  const navigate = useNavigate();
  console.log('values', values);
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    InputValidation();
  };
  const InputValidation = () => {
    const check = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,10}$/;

    if (/\S+@\S+\.\S+/.test(values.email) && check.test(values.password)) {
      navigate('/WelcomeScreen');
    } else {
      if (values.email === '' && values.password === '') {
        setValues((prev) => ({
          ...prev,
          errorEmail: 'Please Enter Your Email-Id',
          errorPassword: 'Please Enter your Password',
        }));
      } else if (
        /\S+@\S+\.\S+/.test(values.email) === false &&
        check.test(values.password) === false
      ) {
        setValues((prev) => ({
          ...prev,
          errorEmail: 'Please Enter Valid Email (sample@xyz.com)',
          errorPassword:
            'Password must contain one digit from 1 to 9,one lowercase letter, one uppercase letter, one special character, no space, and it must be 5-10 characters long.',
        }));
      } else if (
        /\S+@\S+\.\S+/.test(values.email) === true &&
        check.test(values.password) === false
      ) {
        setValues((prev) => ({
          ...prev,
          errorPassword:
            'Password must contain one digit from 1 to 9,one lowercase letter, one uppercase letter, one special character, no space, and it must be 5-10 characters long.',
        }));
      } else if (
        /\S+@\S+\.\S+/.test(values.email) === false &&
        check.test(values.password) === true
      ) {
        setValues((prev) => ({
          ...prev,
          errorEmail: 'Please Enter Valid Email',
        }));
      }

    }
  };
  return (
    <div>
      <div className="pt-46px flex flex-col items-center">
        <Header leftIcon={<LeftArrow className="w-24px h-16px" />} title="Login" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-56px flex flex-col items-center justify-center gap-24px pl-20px "
        onChange={(event: React.ChangeEvent<HTMLFormElement>) => {
          setValues({ ...values, [event.target.name]: event.target.value });
        }}
      >
        <Input name="email" type="text" placeholder="Email" />
        {values.errorEmail && <span className="fs-12px w-343px text-red">{values.errorEmail}</span>}
        <Input name="password" type="password" placeholder="Password" />
        {values.errorPassword && (
          <span className="fs-12px w-343px text-red">{values.errorPassword}</span>
        )}
        <div className="pr-15px">
          <Button variant="primary" children="Login" className="fs-18px" />
        </div>
      </form>
      <div className="mt-45px flex flex-col items-center justify-center gap-24px">
        <Link className=" text-primary font-600" to="/forgot-password">
          <Button
            className="fs-18px text-primary bg-none"
            variant="text"
            children="Forgot Password ?"
          />
        </Link>
      </div>
      <div className="mt-45px flex items-center justify-center">
        <span className="font-size-16px text-light-grey font-500">
          Don’t have an account yet?{' '}
          <Link className="text-decoration-none font-size-16px text-primary font-600" to="/SignUp">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
