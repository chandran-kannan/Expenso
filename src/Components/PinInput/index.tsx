import React, { useState } from "react";

type pinintput = {
  maxLength: number;
  visible: boolean;
  className?: string;
  value?: string;
  disabled?: boolean;
  val?: number[];
  onChange?: () => void;
};

const PinInput = ({ maxLength, visible, className, value, onChange, val, disabled }: pinintput) => {
  const [inputValues, setInputValues] = useState<any>({});
  const [outPutValues, setOutPutValues] = useState<any>({});

  return (
    <div className="flex gap-16px">
      {[...Array(maxLength)].map((el, inputIndex: number) =>
        visible ? (
          <input
            disabled={disabled}
            key={inputIndex}
            id={String(inputIndex)}
            maxLength={1}
            type="password"
            className={`w-32px h-32px rounded-50px border-4px text-center pointer outline caret-color  text-transparent ${className}
               ${val?.[inputIndex] !== undefined && "bg-white"} `}
            value={val?.[inputIndex]}
            name={String(inputIndex)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValues({
                ...inputValues,
                [event.target.name]: event.target.value
              });

              const next = document.getElementById(String(inputIndex + 1)) as HTMLInputElement;
              next?.focus();
            }}
            onKeyUp={(event) => {
              if (event.key === "Backspace") {
                const previous = document.getElementById(
                  String(inputIndex - 1)
                ) as HTMLInputElement;
                previous?.focus();
              }
            }}
          />
        ) : (
          <input
            key={inputIndex}
            id={String(inputIndex)}
            maxLength={1}
            disabled={disabled}
            type="text"
            className={` rounded-50px border-none text-center pointer outline caret-color font-32px font-700
          ${outPutValues[inputIndex] ? " bg-none w-32px h-32px  " : "w-16px h-16px grey"}`}
            onKeyUp={(event) => {
              console.count("input 2");
              if (event.key === "Backspace") {
                const previous = document.getElementById(
                  String(inputIndex - 1)
                ) as HTMLInputElement;
                previous?.focus();
              }
            }}
            name={String(inputIndex)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setOutPutValues({
                ...outPutValues,
                [event.target.name]: event.target.value
              });
              const next = document.getElementById(String(inputIndex + 1)) as HTMLInputElement;
              next?.focus();
            }}
          />
        )
      )}
    </div>
  );
};

export default PinInput;
