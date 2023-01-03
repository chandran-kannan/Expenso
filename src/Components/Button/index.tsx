import React from "react";

export type ButtonProps = {
  btnClick?: () => void;
  type?: string;
  children?: string;
}

const Button = ({btnClick, type, children}: ButtonProps ) => {

  console.log("children",children);

  const classBuilder = (type: string | undefined) => {
    switch (type) {
      case 'primary':
        return "p8 w-343 h-56 bg-primary border-none rounded-16 font-size-18 color-white font-600 pointer"
        case 'secondry':
          return "p8 w-343 h-56 bg-secondry border-none rounded-16 font-size-18 color-voilet font-600 pointer"
          case 'text':
            return "p8 w-343 h-56 bg-none border-none font-size-18 color-voilet font-600 pointer"
            default :
            return "p8 w-343 h-56 bg-primary border-none rounded-16 font-size-18 color-white font-600 pointer"
    }      
  }

  return (
    <>
      <button className={classBuilder(type)} onClick={btnClick}>
        {children}
      </button>
    </>
  );
};

export default Button;

