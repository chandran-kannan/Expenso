import React, { useState } from 'react';
import { Vector } from '../../assets/Images';

interface dropDown {
  options: string[];
}

const DropDown = ({ options }: dropDown) => {
  const [value, setValue] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const changeValue = (val: string) => {
    setValue(val);
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <div
        className="flex items-center w-343px justify-between border-1 h-56px p-16 rounded-16px relative"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{value === '' ? 'Account type' : value}</span>
        <img src={Vector} alt="" className="w-20 h-10"></img>
      </div>
      <div
        style={{ display: showOptions ? 'block' : 'none' }}
        className="flex items-center w-343px justify-between border-1 rounded-16px mt-16 absolute bg-white z-index-1"
      >
        {options.map((option) => (
          <div
            className="flex items-center h-56px p-16"
            key={option}
            onClick={() => changeValue(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
