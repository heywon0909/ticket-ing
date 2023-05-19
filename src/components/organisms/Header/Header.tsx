import Logo from "../../atoms/Logo/Logo";
import MainFmtButs from "../../molecules/main/MainButs";

const Header = () => {
  return (
    // bg-brand
    <header className="p-2 h-44 border-b-2 flex items-center justify-center flex-col">
      <div className="flex w-4/5">
        <Logo />
      </div>
      <MainFmtButs />
    </header>
  );
};

export default Header;
