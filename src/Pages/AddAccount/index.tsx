import React, { createContext, useEffect, useState } from "react";
import DropDown from "../../Components/DropDown";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import { LeftArrow } from "../../assets/Icons";
import Button from "../../Components/Button";
import {
  Chase,
  Paypal,
  Citi,
  BankOfAmerica,
  Jago,
  Mandiri,
  Bca,
  Wallet
} from "../../assets/Images";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Store";
import { numberValidator } from "../../Utils/Validators";

const AddAccount = () => {
  const { bankDetail, setBankDetail } = useContext(Context);
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [temp, setTemp] = useState<object>();
  const navigate = useNavigate();

  const selectedValue = (val: string) => {
    val === "Bank" ? setShow(true) : setShow(false);
    val !== "Bank" && setName(val);
  };
  const handleChange = (i: string, icons: object) => {
    setName(i);
    setTemp(icons);
  };

  const handleClick = () => {
    navigate("/account");
  };

  const handleChanges: any = () => {
    if (name && temp?.amount) {
      setBankDetail([...bankDetail, temp]);
      navigate("/account");
    }
  };

  const addAmount = (e: any) => {
    name === "Wallet" && setTemp(wallet);
    if (name) {
      if (numberValidator(e.target.value)) {
        setTemp((prev: any) => ({ ...prev, amount: Number(e.target.value) }));
      }
    }
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
  const wallet = {
    name: "Wallet",
    icon: Wallet
  };
  return (
    <div className="h-full bg-primary flex flex-col justify-between">
      <div className=" flex flex-col ml-auto mr-auto w-311px gap-auto ">
        <div className="w-343px  h-56px flex  items-center ml-auto mr-auto   ">
          <Header
            title={"Add new account"}
            className="text-white flex justify-center items-center "
            leftIcon={<LeftArrow className="h-16px w-24px" fill="white" onClick={handleClick} />}
          />
        </div>
      </div>
      <div className="flex flex-col mt-auto  text-white ml-32px mb-7px">
        <p className="fs-18px opacity-7">Balance</p>
        <span className="font-600 fs-64px flex mt-auto">
          $
          <input
            className="w-full  h-64px border-none bg-primary font-600 fs-64px text-white outline placeholder"
            onChange={addAmount}
            value={temp?.amount ? temp.amount : ""}
            maxLength={6}
            placeholder="0.00"
          ></input>
        </span>
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
                    onClick={() => handleChange(i.name, icons[index])}
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
          onClick={() => handleChanges(wallet)}
        />
      </div>
    </div>
  );
};

export default AddAccount;
