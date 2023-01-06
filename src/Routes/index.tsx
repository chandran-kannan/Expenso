import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Button from '../Components/Button';

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
