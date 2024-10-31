import Hello from "../components/hello";
import HotComponent from "../components/newcomponent";

export default function Home() {
  // console.log("Hello from server");
  return (
    <>
      <h1 className="text-3xl">Welcome to next JS</h1>
      <Hello/>
      <HotComponent/>
    </>
  );
}
