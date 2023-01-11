export type ButtonProps = {
  onClick?: () => void;
  variant?: string;
  children?: string;
  classNames?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ onClick, variant, children, classNames, type }: ButtonProps) => {
  const classBuilder = (variant: string | undefined) => {
    switch (variant) {
      case "primary":
        return " bg-primary text-white";
      case "secondry":
        return "bg-secondry text-primary";
      case "text":
        return " bg-none text-primary";
      default:
        return "bg-primary";
    }
  };

  return (
    <button
      type={type}
      className={`${classBuilder(variant)} ${classNames}
      p-8px w-343px h-56px border-none rounded-16px font-size-18px font-600 pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
