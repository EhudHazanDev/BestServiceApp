import { Logo } from "../Logo";
import { Navbar } from "../Navbar";

export const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Logo/>
      <Navbar/>
    </div>
  );
};
