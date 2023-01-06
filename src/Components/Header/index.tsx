
type HeaderProps = {
  title ?: string;
  className ?: string; 
  leftIcon ?: JSX.Element
  rightIcon ?: JSX.Element
}
/*To use it => <Header title='Sign Up' leftIcon={<LeftArrow/>} className="text-red"/>*/

const Header = ({title , className , leftIcon , rightIcon} : HeaderProps) => {
  return (
    <div className='flex w-350px px-15px m-auto justify-between'>
      <span>
        {leftIcon}
      </span>
     <h6 className={`font-600 fs-18px text-black header-shadow ${(className)}`} > {title} </h6>
     <span>
      {rightIcon}
     </span> 
   </div>

   /*To use it => <Header title='Sign Up' leftIcon={<LeftArrow/>} className="text-red"/>*/
   
  )
}

export default Header