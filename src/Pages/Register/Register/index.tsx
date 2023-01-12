import Button from "../../../Components/Button";
import { LeftArrow } from "../../../assets/Icons";
import Header from "../../../Components/Header";
import Input from "../../../Components/Input";
import Modal from "../../../Components/Modal";
import { useState, useEffect } from "react";
import "./checkbox.css"

const Register = () => {
  const initialValue = { name: '', email: '', password: '' };
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: any) => {
    const errors = {};
    const namepat = /^[\a-zA-Z]*[\s]*[\a-zA-Z]*[\s]*[\a-zA-Z]*$/;
    const emailpat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordpat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,10}$/;
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!namepat.test(values.email)) {
      errors.name = "This is not a valid name";
    }
    else if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailpat.test(values.email)) {
      errors.email = "This is not a valid Email";
    }
    else if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordpat.test(values.email)) {
      errors.password = "This is not a valid password";
    }
    return errors;
  }
  return (
    <div className="w-full px-15px mx-auto mt-20px">
      <div className="w-full">
        <Header leftIcon={<LeftArrow className="w-24px h-16px items-center" />} title="Sign Up" />
      </div>

      <form className="mt-56px flex mx-auto flex-col gap-24px" onSubmit={handleSubmit}>
        <Input className="display-block mx-auto" type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Name" />
        <p className="w-full text-red fs-16px">{formErrors.name}</p>

        <Input className="display-block mx-auto"
          name="email"
          value={formValues.email}
          type="email"
          onChange={handleChange}
          placeholder="Email" />
        <p className="w-full text-red fs-16px">{formErrors.email}</p>

        <Input className="display-block mx-auto" type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="password" />
        <p className="w-full text-red fs-16px">{formErrors.password}</p>

        <div className="w-full display-block">
          <label className="container display-block relative pointer-c pl-c fs-c lh-c w-user-select">
            <span className="relative bottom-5px-c">By signing up, you agree
              to the <span className="text-primary font-500" onClick={() => setShow(true)}>
                terms of service and Privacy Policy.</span></span>
            <input type="checkbox" name="" />
            <span className="checkmark absolute top-0-c left-0-c height-25px-c width-25px-c border-2px-c radius-5px"></span>
          </label>
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
        <p className="fs-18px text-center text-grey2">Already have an account?<span className="text-primary "> login.</span></p>
      </div>
    </div>
  );
};

export default Register;
