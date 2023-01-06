import Carousel from "./Components/Carousel";
import Header from "./Components/Header";
import { LeftArrow } from "./assets/Icons";

const App = () => {
  return (
    <div>
      <div>
      <Header leftIcon = {<LeftArrow/>}  title="Sign up" className="" rightIcon={<LeftArrow />} />
      </div>
      <div>
        <Carousel/>
      </div>
     </div>
  );
};

export default App;
