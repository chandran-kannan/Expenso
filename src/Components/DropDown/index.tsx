import React, { useState } from "react";
import { Vector } from "../../assets/Images";

type dropDown = {
  options?: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const DropDown = ({ options, placeholder, onChange, className }: dropDown) => {
  const [value, setValue] = useState<string>("");
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const changeValue = (val: string) => {
    setValue(val);
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <div
        className="flex items-center w-343px justify-between border-1px h-56px p-16px rounded-16px relative"
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <span className={`${!value && className}`}>{value === "" ? placeholder : value}</span>
        <img src={Vector} alt="" className="w-20 h-10"></img>
      </div>
      <div
        className={`flex-col border-1px rounded-16px mt-20px max-height-160px overflow-y w-343px bg-white z-index-1 absolute ${
          showOptions ? "flex" : "display-none"
        }`}
      >
        {options?.map((option) => (
          <div
            className="flex items-center h-56px p-16px"
            key={option}
            onClick={() => {
              changeValue(option);
              onChange?.(option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
