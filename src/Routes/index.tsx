import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import UserAvatar from '../Components/UserAvatar';

const RoutesWrapper = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAvatar className="h-32px w-32px" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
