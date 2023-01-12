
import Carousel from '../../Components/Carousel';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="w-350px pl-15px pr-15px m-auto">
      <div>
        <Carousel />
      </div>
      <div className='mt-33px'>
        <Button variant="primary" onClick={() => navigate('/signup')}>Sign Up</Button>
        <div className='mt-16px'>
          <Button variant="secondry" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
