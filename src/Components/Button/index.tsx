
export type ButtonProps = {
  onClick?: () => void;
  variant?: string;
  children?: string;
  classNames ?: string
}

const Button = ({onClick, variant, children , classNames}: ButtonProps ) => {

  const classBuilder = (variant: string | undefined) => {
    switch (variant) {
      case 'primary':
        return " bg-primary text-white"
        case 'secondry':
          return "bg-secondry text-primary"
          case 'text':
            return " bg-none text-primary"
            default :
            return "bg-primary"
    }      
  }

  return (
  
      <button className={`${classBuilder(variant)} 
      p8 w-343 h-56 border-none rounded-16 font-size-18 font-600 pointer`} 
      onClick={onClick}>
        {children}
      </button>
    
  );
};

export default Button;

