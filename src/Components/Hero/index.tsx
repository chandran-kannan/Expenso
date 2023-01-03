
import { LeftArrow } from '../../assets/Icons'

export type HeroProps = {
  text ?: string;
}
const Hero = ({text} : HeroProps) => {
  return (
    <div className='flex gap-100'>
     <LeftArrow/>
     <p className='font-600 font-size-18 color-black hero-title'>{text}</p>
    </div>
  )
}

export default Hero