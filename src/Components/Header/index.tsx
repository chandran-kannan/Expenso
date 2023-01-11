type HeaderProps = {
  title?: string;
  className?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

/*To use it => <Header leftIcon={<LeftArrow height={14} width={14} fill="white"/>} title='Sign Up' className='text-white'/>*/

const Header = ({ title, className, leftIcon, rightIcon }: HeaderProps) => {
  return (
    <div className="flex w-350px m-auto justify-between">
      <span className="mt-3px">{leftIcon}</span>
      <h6 className={`font-600 fs-18px ${className}`}> {title} </h6>
      <span className="mt-3px">{rightIcon}</span>
    </div>
  );
};

export default Header;
