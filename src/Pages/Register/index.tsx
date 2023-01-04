
import Input from "../../Components/Input";
const Register = () => {
  return (
    <div>
      <form className="mt-56 flex flex-col gap-24 h-216 ">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="password" />
      </form>
    </div>
  );
};

export default Register;
