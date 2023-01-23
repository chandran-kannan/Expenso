export type ButtonProps = {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "primary" | "secondry" | "text" | undefined;
  children?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ onClick, variant, children, className, type }: ButtonProps) => {
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
      className={`${classBuilder(variant)} ${className}
      p-8px w-343px h-56px border-none rounded-16px fs-18px font-600 pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
