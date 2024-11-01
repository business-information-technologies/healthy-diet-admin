import LoginForm from "@/components/forms/loginform";
import Hello from "../_components/hello";
import HotComponent from "../_components/newcomponent";

export default function Home() {
  // console.log("Hello from server");
  return (
    <>
      <h1 className="text-3xl">Login Page</h1>
      <LoginForm />
      <HotComponent />
    </>
  );
}
