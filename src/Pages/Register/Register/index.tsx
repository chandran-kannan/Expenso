import Button from "../../../Components/Button";
import { LeftArrow } from "../../../assets/Icons";
import Header from "../../../Components/Header";
import Input from "../../../Components/Input";
import Modal from "../../../Components/Modal";
import { useState, useEffect } from "react";
import "./checkbox.css"
import { useNavigate } from "react-router-dom";

type formvaluetype = {
  id?: number;
  name?: string;
  email?:string;
  password?:string | number;
};

const Register = () => {
  const initialValue = { name: '', email: '', password: '', terms: '' };
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState<formvaluetype>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checked, setChecked] = useState(false);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value }); 
  }
  const handleChangeTwo = () => {
    setChecked(!checked);
  };
  const navicate = useNavigate();
  const loginPage = useNavigate();

  const clicktoLogin = ()=>
  {
    loginPage('/login');
  }
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit && checked) {
      console.log(formValues);
      navicate('/verification');
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors:formvaluetype = {};
    const namepat = /^[\a-zA-Z]*[\s]*[\a-zA-Z]*[\s]*[\a-zA-Z]*$/;
    const emailpat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordpat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,10}$/;
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!namepat.test(values.name)) {
      errors.name = "Invalid value for name. Name field should contain only letters. ";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailpat.test(values.email)) {
      errors.email = "Please enter valid email (sample@xyz.com)";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordpat.test(values.password)) {
      errors.password = "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 5-10 characters long.";
    }

    return errors;
  }
  return (
    <div className="w-full px-15px mx-auto mt-20px">
      <div className="w-full">
        <Header leftIcon={<LeftArrow className="w-24px h-16px items-center" />} title="Sign Up" />
      </div>

      <form className="mt-56px flex mx-auto flex-col gap-24px mx-w-343px" onSubmit={handleSubmit}>
        <Input className="display-block mx-auto" type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name" />
        <p className="w-full text-red fs-12px">{formErrors.name}</p>

        <Input className="display-block mx-auto"
          name="email"
          value={formValues.email}
          type="text"
          onChange={handleChange}
          placeholder="Email" />
        <p className="w-full text-red fs-12px">{formErrors.email}</p>

        <Input className="display-block mx-auto" type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="password" />
        <p className="w-full text-red fs-12px">{formErrors.password}</p>

        <div className="w-full display-block">
          <label className="container display-block relative pointer pl-38px fs-18px lh-25px w-user-select">
            <span className="relative b-5px">By signing up, you agree
              to the <span className="text-primary font-500" onClick={() => setShow(true)}>
                terms of service and Privacy Policy.</span></span>
            <input type="checkbox" checked={checked} onChange={handleChangeTwo} />
            <span className="checkmark absolute t-0 l-0 h-25px w-25px border-3px rounded-5px"></span>
          </label>
          <p className="w-full text-red fs-12px">{isSubmit ? (checked ? null : "Please select the checkbox"):null}</p>
          <Modal onClose={() => setShow(false)} show={show} />
        </div>
        <div className="">
          <Button type="submit" className="display-block mx-auto fs-18px" variant="primary">Sign Up</Button>
        </div>

      </form>

      <div className="w-full">
        <p className="fs-16px  mt-20px font-700 text-center text-grey2">Or with</p>
      </div>
      <div className="w-full mt-20px mb-20px">
        <p className="fs-18px py-10px font-700 text-center text-black p-16 border rounded-15px flex items-center justify-center">
          <img className="w-30px mr-5px" src="src/assets/Images/flat-color-icons-google.png" /> Sign Up with Google</p>
      </div>
      <div className="w-full mt-20px mb-20px">
        <p className="fs-18px text-center text-grey2">Already have an account?<span className="text-primary" onClick={clicktoLogin}> login.</span></p>
      </div>
    </div>
  );
};
 
export default Register;
