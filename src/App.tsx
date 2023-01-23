import Account from "./Pages/Account";
import RoutesWrapper from "./Routes";
import { Data } from "./Store";
import MyComponent from "./Store/MyComponent";
const App = () => {
  return (
    <div className="h-full">
      <Data>
        <RoutesWrapper />
      </Data>
    </div>
  );
};

export default App;
