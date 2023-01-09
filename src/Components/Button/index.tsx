export type ButtonProps = {
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: string;
  children?: string;
  classNames?: string;
};
const Button = ({ onClick, variant, children, classNames }: ButtonProps) => {
  const classBuilder = (variant: string | undefined) => {
    switch (variant) {
      case 'primary':
        return ' bg-primary text-white';
      case 'secondry':
        return 'bg-secondry text-primary';
      case 'text':
        return ' bg-none text-primary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <button
      className={`${classBuilder(variant)} 
      p-8px w-343px h-56px border-none rounded-16px font-size-18px font-600 pointer ${classNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
