import Button from "../../../Components/Button";
import { LeftArrow } from "../../../assets/Icons";
import Header from "../../../Components/Header";
import Input from "../../../Components/Input";
import Modal from "../../../Components/Modal";
import { useState } from "react";
import "./checkbox.css"

const Register = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setError(null);
    setMessage("");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (/^[A-Za-z\s]+$/.test(value)) setError(null);
    else setError("Please enter the valid name");
    setMessage(value);
  }

  return (
    <div className="w-full px-15px mx-auto mt-20px">
      <div className="w-full">
        <Header leftIcon={<LeftArrow height={18} width={18} />} title="Sign Up" />
      </div>

      <form className="mt-56px flex mx-auto flex-col gap-24px h-216px " onSubmit={handleSubmit}>
        <Input className="display-block mx-auto"
          type="text" name="message" value={message} onChange={handleChange} placeholder="Name" />
        {error && (
          <label style={{ color: "red" }} htmlFor="message">
            {error}
          </label>)}
        <Input className="display-block mx-auto" type="email" placeholder="Email" />
        <Input className="display-block mx-auto" type="password" placeholder="password" />
      </form>
      <div className="w-full mt-20px display-block">
        <label className="container display-block relative pointer-c pl-c mb-12px-c fs-c lh-c w-user-select">
          <span className="relative bottom-5px-c">By signing up, you agree
            to the <span className="text-primary font-500" onClick={() => setShow(true)}>
              terms of service and Privacy Policy.</span></span>
          <input type="checkbox" />
          <span className="checkmark absolute top-0-c left-0-c height-25px-c width-25px-c border-2px-c radius-5px"></span>
        </label>
        <Modal onClose={() => setShow(false)} show={show} />
      </div>
      <div className="mt-30px">
        <Button classNames="display-block mx-auto fs-18px" variant="primary">Sign Up</Button>
      </div>
      <div className="w-full">
        <p className="fs-16px  mt-20px font-700 text-center text-grey2">Or with</p>
      </div>
      <div className="w-full mt-20px mb-20px">
        <p className="fs-18px px-15px font-700 text-center text-black p-16 border rounded-15px flex items-center justify-center">
          <img className="w-30px mr-5px" src="src/assets/Images/flat-color-icons-google.png" /> Sign Up with Google</p>
      </div>
      <div className="w-full mt-20px mb-20px">
        <p className="fs-18px text-center text-grey2">Already have an account?<span className="text-primary "> login.</span></p>
      </div>
    </div>
  );
};

export default Register;
