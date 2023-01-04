import React, { useState, useRef } from 'react';

type pinintput = {
  maxLength: number;
  visible: boolean;
};

const PinInput = ({ maxLength, visible }: pinintput) => {
  const [inputValues, setInputValues] = useState<any>({});
  const [outPutValues, setOutPutValues] = useState<any>({});

  // const inputReference = useRef<HTMLInputElement>();

  // console.log(inputValues);

  return (
    <div className="flex gap-16">
      {[...Array(maxLength)].map((el, inputIndex: number) =>
        visible ? (
          <input
            key={inputIndex}
            id={String(inputIndex)}
            maxLength={1}
            type="password"
            className={`w-32 h-32 rounded-50 border-4 text-center pointer outline caret-color font-none
               ${inputValues[inputIndex] ? ' bg-primary ' : ' '} `}
            value={inputValues[inputIndex]}
            name={String(inputIndex)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // console.log("inputIndex", event.target.name);
              setInputValues({
                ...inputValues,
                [event.target.name]: event.target.value,
              });
              const next = document.getElementById(String(inputIndex + 1)) as HTMLInputElement;
              next?.focus();
              // next?.select();
            }}
            onKeyUp={(event) => {
              console.count('input 2');
              if (event.key === 'Backspace') {
                const previous = document.getElementById(
                  String(inputIndex - 1),
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
            className={` rounded-50 border-none text-center pointer outline caret-color font-32 font-700
          ${outPutValues[inputIndex] ? ' bg-none w-32 h-32  ' : 'w-16 h-16 grey'}`}
            onKeyUp={(event) => {
              console.count('input 2');
              if (event.key === 'Backspace') {
                const previous = document.getElementById(
                  String(inputIndex - 1),
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
                [event.target.name]: event.target.value,
              });
              const next = document.getElementById(String(inputIndex + 1)) as HTMLInputElement;
              next?.focus();
              // next?.select();
            }}
          />
        ),
      )}
    </div>
  );
};

export default PinInput;
