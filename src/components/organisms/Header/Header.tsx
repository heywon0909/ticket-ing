import { BsTicketDetailedFill } from "react-icons/bs";
const Header = () => {
  return (
    // bg-brand
    <header className="p-2 h-16 border-b-2 flex items-center justify-center">
      <div className="flex w-4/5">
        <h2 className="text-zinc-800 text-NeoExtra text-2xl tracking-tight font-semibold">
          ticket-ing
        </h2>
        <BsTicketDetailedFill size="37" className="pt-1 pl-2 text-yellow-400" />
      </div>
    </header>
  );
};

export default Header;
