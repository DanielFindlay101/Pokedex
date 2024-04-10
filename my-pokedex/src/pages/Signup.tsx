import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar path={"/login"} name={"Login"} />
      <Form child={"Signup"} />
    </>
  );
}
