import React, { useState, useRef } from "react";

type pinintput = {
  maxLength: number;
  visible: boolean;
};

const PinInput = ({ maxLength, visible }: pinintput) => {
  const [inputValues, setInputValues] = useState<any>({});
  const [outPutValues, setOutPutValues] = useState<any>({});

  return (
    <div className="flex gap-16px">
      {[...Array(maxLength)].map((el, inputIndex: number) =>
        visible ? (
          <input
            key={inputIndex}
            id={String(inputIndex)}
            maxLength={1}
            type="password"
            className={`w-32px h-32px rounded-50px border-4px text-center pointer outline caret-color
               ${inputValues[inputIndex] ? " bg-primary " : " "} `}
            name={String(inputIndex)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // console.log("inputIndex", event.target.name);
              setInputValues({
                ...inputValues,
                [event.target.name]: event.target.value
              });
              const next = document.getElementById(String(inputIndex + 1)) as HTMLInputElement;
              next?.focus();
              // next?.select();
            }}
            onKeyUp={(event) => {
              console.count("input 2");
              if (event.key === "Backspace") {
                const previous = document.getElementById(
                  String(inputIndex - 1)
                ) as HTMLInputElement;
                previous?.focus();
                // previous?.select();
              }
            }}
          />
        ) : (
          <input
            key={inputIndex}
            id={String(inputIndex)}
            maxLength={1}
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
                // previous?.select();
              }
            }}
            name={String(inputIndex)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // console.log("inputIndex", event.target.name);
              setOutPutValues({
                ...outPutValues,
                [event.target.name]: event.target.value
              });
              const next = document.getElementById(String(inputIndex + 1)) as HTMLInputElement;
              next?.focus();
              // next?.select();
            }}
          />
        )
      )}
    </div>
  );
};

export default PinInput;
