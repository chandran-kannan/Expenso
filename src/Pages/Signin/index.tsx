
import Input from "../../Components/Input";
const Signin = () => {
  return (
    <div>
      <div className="mt-56 flex flex-col gap-24 h-216">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="password" />
      </div>
    </div>
  );
};

export default Signin;
