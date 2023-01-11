import Input from "../../Components/Input";
const Register = () => {
  return (
    <form className="mt-56px flex flex-col gap-24px h-216px ">
      <Input type="text" placeholder="Name" />
      {/* <Input type="email" placeholder="Email" /> */}
      {/* <Input type="password" placeholder="password" /> */}
    </form>
  );
};

export default Register;
