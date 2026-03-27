import BetaAlert from "../../components/BetaAlert";
import HomePage from "./pages/Home/page";

export default function Page() {
  return (
    <>
      <BetaAlert supportEmail="canoy.john812@gmail.com" />
      <HomePage />
    </>
  );
}