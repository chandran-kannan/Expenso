import React, { Children, useState } from 'react';
import { Vector } from '../../assets/Images';

type dropDown = {
  options?: string[];
  placeholder?: string;
  childern?: JSX.Element;
  className?: string;
};

const DropDown = ({ options, placeholder, childern, className }: dropDown) => {
  const [value, setValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const changeValue = (val: string) => {
    setValue(val);
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <div
        className="flex items-center w-343px justify-between border-1px h-56px p-16px rounded-16px relative"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{value === '' ? placeholder : value}</span>
        <img src={Vector} alt="" className="w-20 h-10"></img>
      </div>
      <div
        className={`flex items-center w-343px justify-between border-1px rounded-16px mt-16px absolute bg-white z-index-1 ${
          showOptions ? 'display-block' : 'display-none'
        }`}
      >
        {options?.map((option) => (
          <div
            className="flex items-center h-56px p-16px"
            key={option}
            onClick={() => changeValue(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className={className}>{value && childern}</div>
    </div>
  );
};

export default DropDown;
