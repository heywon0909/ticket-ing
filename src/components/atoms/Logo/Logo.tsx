import { BsTicketDetailedFill } from "react-icons/bs";
const Logo = () => {
  return (
    <div className='flex'>
      <h2 className="text-zinc-800 text-2xl tracking-tight font-semibold">
        ticket-ing
      </h2>
      <BsTicketDetailedFill size="37" className="pt-1 pl-2 text-yellow-400" />
    </div>
  );
};

export default Logo;
