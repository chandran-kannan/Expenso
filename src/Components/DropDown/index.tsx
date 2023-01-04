import React, { useState } from 'react';
import { Vector } from '../../assets/Images';

interface dropDown {
  options: string[];
}

const DropDown = ({ options }: dropDown) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const showHide = () => {
    setShow(!show);
    console.log(show);
  };
  const changeValue = (val: string) => {
    setValue(val);
    setShow(!show);
  };
  return (
    <div>
      <div
        className="flex items-center w-343 justify-between border-1 h-56 p-16 rounded-16 relative"
        onClick={showHide}
      >
        <span>{value === '' ? 'Account type' : value}</span>
        <img src={Vector} alt="" className="w-20 h-10"></img>
      </div>
      <div
        style={{ display: show ? 'block' : 'none' }}
        className="flex items-center w-343 justify-between border-1 rounded-16 mt-16 absolute bg-white z-1"
      >
        {options.map((option) => (
          <div
            className="flex items-center h-56 p-16"
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
