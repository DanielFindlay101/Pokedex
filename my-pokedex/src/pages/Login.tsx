import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function Login() {
  return (
    <>
      <Navbar path={"/signup"} name={"Signup"} />
      <Form child={"Login"} />
    </>
  );
}
