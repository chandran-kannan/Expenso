
import { LeftArrow } from '../../assets/Icons'

export type HeroProps = {
  title ?: string;
}
const Header = ({title} : HeroProps) => {
  return (
    <div className='flex'>
     <LeftArrow/>
     <h6 className='font-600 font-size-18 text-black hero-shadow'>{title}</h6>
    </div>
  )
}

export default Header