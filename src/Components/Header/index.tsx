
export type HeroProps = {
  title ?: string;
  className ?: string; 
  leftIcon ?: JSX.Element
  rightIcon ?: JSX.Element
}
const Header = ({title , className , leftIcon , rightIcon} : HeroProps) => {
  return (
    <div className='flex w-350px px-15px m-auto justify-between'>
      <span>
        {leftIcon}
      </span>
     <h6 className={`font-600 font-size-18 text-black hero-shadow ${(className)}`} > {title}   </h6>
     <span>
      {rightIcon}
     </span>
    </div>
  )
}

export default Header