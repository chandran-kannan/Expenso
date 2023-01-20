import React from "react";
import { Success } from "../../assets/Images";

const YouAreSet = () => {
  return (
    <div className="flex justify-center flex-col items-center h-full w-full">
      <img src={Success} />
      <h5 className="fs-18px">You are set!</h5>
    </div>
  );
};

export default YouAreSet;
