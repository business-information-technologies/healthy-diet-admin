
import { SignIn } from "@/components/shared/signIn";
import HotComponent from "../_components/newcomponent";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth()

  if(session) {
    redirect('/dashboard/analytics')
  }
  // console.log("Hello from server");
  return (
    <>
      <h1 className="text-3xl">Login Page</h1>
      <SignIn provider="google"/>
      <HotComponent />
    </>
  );
}
