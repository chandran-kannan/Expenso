import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Header from '../../Components/Header';
import { LeftArrow } from '../../assets/Icons';

const LoginScreen = () => {
  const [emailValidation, setEmailValidation] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorPassword, setErrorPassword] = useState<string>('');

  function storeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailValidation(e.target?.value);
  }
  const storePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target?.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    InputValidation();
    console.log('handleSubmit');
  };
  const navigate = useNavigate();
  const InputValidation = () => {
    const check = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,10}$/;
    if (/\S+@\S+\.\S+/.test(emailValidation) && check.test(passwordValue))
      navigate('/WelcomeScreen');
    else {
      setErrorPassword(
        'Password must contain one digit from 1 to 9,one lowercase letter, one uppercase letter, one special character, no space, and it must be 5-10 characters long.',
      );
    }
  };

  return (
    <div>
      <div className="pt-46px flex flex-col items-center">
        <Header leftIcon={<LeftArrow width={24} height={16} />} title="Login" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-56px flex flex-col items-center justify-center gap-24px "
      >
        <Input type="email" placeholder="Email" onChange={storeEmail} />
        <Input type="password" placeholder="Password" onChange={storePassword} />
        {errorPassword && <span className="fs-12px w-343px text-red">{errorPassword}</span>}
      </form>
      <div className="mt-45px flex flex-col items-center justify-center gap-24px">
        <Button variant="primary" children="Login" classNames="fs-18px" onClick={InputValidation} />
        <Link className=" text-primary font-600" to="/forgot-password">
          <Button
            classNames="fs-18px text-primary bg-none"
            variant="Text"
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

export default LoginScreen;
