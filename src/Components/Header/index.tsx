type HeaderProps = {
  title ?: string;
  className ?: string; 
  leftIcon ?: JSX.Element
  rightIcon ?: JSX.Element
}

/*To use it => <Header leftIcon={<LeftArrow height={18} width={18}/>} className="text-black" title="Sign up" />*/

const Header = ({title , className , leftIcon , rightIcon} : HeaderProps) => {
  return (
    <div className='flex w-350px px-15px m-auto justify-between'>
      <span className="mt-3px">
        {leftIcon}
      </span>
     <h6 className={`font-600 fs-18px ${(className)}`} > {title} </h6>
     <span className="mt-3px">
      {rightIcon}
     </span> 
   </div>

  
   
  )
}

export default Header