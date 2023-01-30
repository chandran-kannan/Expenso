import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Delet, RightArrow } from "../../assets/Icons";
import PinInput from "../../Components/PinInput";
const EnterPin = () => {
  const [enterPin, setEnterPin] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const enterPinValue = enterPin.join("");
  if (count !== 4) {
    var handEnterPin = (arr: string, index: number) => {
      setEnterPin([...enterPin, arr === "top" ? keyBoardNumbers[index] : keyBoardNumber[index]]);
      setCount(count + 1);
      console.log(enterPin);
    };
  }
  const handDeletEnterPin = () => {
    enterPin.pop();
    setEnterPin(enterPin);
    setCount(count - 1);
  };
  const handChange = () => {
    if (enterPinValue !== "1111") {
      setEnterPin([]), setError(true), setCount(0);
    }
  };

  const keyBoardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keyBoardNumber = [0];
  return (
    <div className="bg-primary h-full  flex flex-col justify-start ">
      <header className="text-white w-343px  h-56px flex justify-center items-center fs-18px mx-auto ">
        Enter your pin
      </header>
      <span className="mx-auto flex justify-center items-center justify-start justify-start mt-56px">
        <PinInput
          value={enterPinValue}
          disabled={true}
          maxLength={4}
          visible={true}
          className=" flex gap-16px"
          val={enterPin}
        />
      </span>

      {error && <p className="text-fade-red mt-24px mx-auto">Please enter valid pin!</p>}

      <div className=" flex-wrap flex justify-center items-center w-full h-375px mt-auto">
        {keyBoardNumbers.map((i, index) => (
          <button
            className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none"
            onClick={() => handEnterPin("top", index)}
          >
            {i}
          </button>
        ))}
        <button
          onClick={handDeletEnterPin}
          className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none active "
        >
          <Delet className="h-30px w-30px" fill="white" />
        </button>
        {keyBoardNumber.map((i, index) => (
          <button
            className="flex justify-center items-center  h-25per w-30per fs-40px text-white font-400 bg-transparent border-none"
            onClick={() => handEnterPin("bottom", index)}
          >
            {i}
          </button>
        ))}
        <button
          onClick={handChange}
          className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none"
        >
          {enterPinValue === "1111" ? (
            <Link to="/">
              <RightArrow className="h-30px w-30px" fill="white" />
            </Link>
          ) : (
            <RightArrow className="h-30px w-30px" fill="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default EnterPin;
