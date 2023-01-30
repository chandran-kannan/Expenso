import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RightArrow, Delet } from "../../assets/Icons";
import PinInput from "../../Components/PinInput";
const Pinset = () => {
  const keyBoardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keyBoardNumber = [0];
  const [pin, setPin] = useState<number[]>([]);
  const [reEnterPinHead, setReEnterPinHead] = useState<string>("Let’s  setup your PIN");
  const [reEnterPin, setReEnterPin] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);
  const [pinValue, setPinValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const reEnterPinValue = reEnterPin.join("");
  const handChangeHeader = () => {
    if (reEnterPinHead === "Let’s  setup your PIN" && count === 4) {
      setReEnterPinHead("Ok. Re type your PIN again."),
        setCount(0),
        setPin([]),
        setPinValue(pin.join(""));
    } else if (pinValue !== reEnterPinValue) {
      setReEnterPinHead("Let’s  setup your PIN");
      setCount(0), setPin([]), setPinValue(pin.join(""));
      setReEnterPin([]), setError(true);
    }
  };
  if (count !== 4) {
    var handSetPin = (arr: string, index: number) => {
      setPin([...pin, arr === "top" ? keyBoardNumbers[index] : keyBoardNumber[index]]);
      setCount(count + 1);
    };
  }
  if (count !== 4) {
    var handReEnterPin = (arr: string, index: number) => {
      setCount(count + 1);
      setReEnterPin([
        ...reEnterPin,
        arr === "top" ? keyBoardNumbers[index] : keyBoardNumber[index]
      ]);
    };
  }
  const handDelet = () => {
    pin.pop();
    setPin(pin);
    reEnterPin.pop();
    setReEnterPin(reEnterPin);
    setCount(count - 1);
  };
  return (
    <div className="bg-primary h-full  flex flex-col justify-start ">
      <header className="text-white w-343px  h-56px flex justify-center items-center fs-18px mx-auto ">
        {reEnterPinHead}
      </header>
      <span className="mx-auto flex justify-center items-center justify-start justify-start mt-56px">
        <PinInput
          value={reEnterPinHead === "Let’s  setup your PIN" ? pinValue : reEnterPinValue}
          disabled={true}
          maxLength={4}
          visible={true}
          className=" flex gap-16px outline-none"
          val={reEnterPinHead === "Let’s  setup your PIN" ? pin : reEnterPin}
        />
      </span>
      {error && (
        <p className="text-fade-red mt-24px mx-auto">Please make sure your setpin match!</p>
      )}
      <div className=" flex-wrap flex justify-center items-center  mt-auto w-full h-375px ">
        {keyBoardNumbers.map((i, index) => (
          <button
            className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none"
            onClick={() =>
              reEnterPinHead === "Let’s  setup your PIN"
                ? handSetPin("top", index)
                : handReEnterPin("top", index)
            }
          >
            {i}
          </button>
        ))}
        <button
          onClick={handDelet}
          className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none active "
        >
          <Delet className="h-30px w-30px" fill="white" />
        </button>
        {keyBoardNumber.map((i, index) => (
          <button
            className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none"
            onClick={() =>
              reEnterPinHead === "Let’s  setup your PIN"
                ? handSetPin("bottom", index)
                : handReEnterPin("bottom", index)
            }
          >
            {i}
          </button>
        ))}
        <button
          onClick={handChangeHeader}
          className="flex justify-center items-center h-25per w-30per  fs-40px text-white font-400 bg-transparent border-none"
        >
          {pinValue === reEnterPinValue && reEnterPinHead === "Ok. Re type your PIN again." ? (
            <Link to={"/setup"}>
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
export default Pinset;
