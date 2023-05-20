import Logo from "../../atoms/Logo/Logo";
import MainFmtButs from "../../molecules/main/MainButs";

const Header = () => {
  return (
    // bg-brand
    <header className="p-2 h-44 border-b-2 flex items-center justify-center flex-col">
      <div className="flex w-4/5 justify-between">
        <Logo />
         <div className='p-2'>
        <button>지켜보기</button>
        </div>
      </div>
      <div className='flex justify-between w-4/5'>
      <MainFmtButs />
      </div>  
    </header>
  );
};

export default Header;
