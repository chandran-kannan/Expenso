import React, { useState } from "react";
import DropDown from "../../Components/DropDown";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import { LeftArrow, RightArrow } from "../../assets/Icons";
import Button from "../../Components/Button";
import { Chase, Paypal, Citi, BankOfAmerica, Jago, Mandiri, Bca } from "../../assets/Images";
import { useNavigate } from "react-router-dom";
const AddAccount = () => {
  const [amount, SetAmount] = useState<string>("0.00");
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const selectedValue = (val: string) => {
    val === "Bank" ? setShow(true) : setShow(false);
    val === "Bank" ? setName("name") : setName(val);
  };
  const handleChange = (i: string) => {
    setName(i);
  };

  const icons = [
    {
      name: "Chase",
      icon: Chase
    },
    {
      name: "Paypal",
      icon: Paypal
    },
    {
      name: "Citi",
      icon: Citi
    },
    {
      name: "BankOfAmerica",
      icon: BankOfAmerica
    },
    {
      name: "Jago",
      icon: Jago
    },
    {
      name: "Mandiri",
      icon: Mandiri
    },
    {
      name: "Bca",
      icon: Bca
    }
  ];

  return (
    <div className="h-full bg-primary flex flex-col justify-between">
      <div className=" flex flex-col ml-auto mr-auto w-311px gap-auto ">
        <div className="w-343px  h-56px flex  items-center ml-auto mr-auto   ">
          <Header
            title={"Add new account"}
            className="text-white flex justify-center items-center "
            leftIcon={<LeftArrow className="h-16px w-24px" fill="white" />}
          />
        </div>
      </div>
      <div className="flex flex-col mt-auto  text-white ml-32px">
        <p className="fs-18px opacity-7">Balance</p>
        <p className="mt-auto font-600 fs-64px">${amount}</p>
      </div>
      <div className="rounded-top-32px bg-white flex flex-col gap-40px ">
        <div className="flex flex-col gap-16px mt-24px ml-auto mr-auto ">
          <Input placeholder="Name" type="text" disabled={false} value={name} />
          <div>
            <DropDown
              className={"text-light-grey"}
              options={["Bank", "Wallet"]}
              placeholder={"Account Type"}
              onChange={selectedValue}
            />

            {show && (
              <div className=" border-1px rounded-16px mt-20px  overflow-y w-343px bg-white z-index-1 flex flex-wrap ">
                {icons.map((i, index) => (
                  <button
                    className="h-40px w-80px bg-light-gray rounded-10px m-2px flex justify-center items-center border-none"
                    onClick={() => handleChange(i.name)}
                  >
                    <img src={i.icon} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <Button
          variant="primary"
          children="continue"
          className="ml-auto mr-auto mb-16px"
          onClick={() => name && navigate("/youareset")}
        />
      </div>
    </div>
  );
};

export default AddAccount;
