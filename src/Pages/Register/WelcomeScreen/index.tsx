
import Carousel from '../../../Components/Carousel';
import Button from '../../../Components/Button';

const WelcomeScreen = () => {
  return (
    <div className='w-350px px-15px m-auto'>
      <div>
        <Carousel />
      </div>
      <div className='mt-33px'>
        <Button variant="primary">Sign Up</Button>
        <div className='mt-16px'>
          <Button variant="secondry">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
