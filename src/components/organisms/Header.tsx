
import {BsTicketDetailedFill} from 'react-icons/bs'
const Header = () => {
    return <header className='flex justify-between bg-zinc-900 p-2 items-center h-16'>
     <div className='flex'>
      <h2 className='text-zinc-100 text-xl tracking-tight'>ticket-ing</h2>
     <BsTicketDetailedFill size="30" className="pt-1 pl-2 text-zinc-100" />
      </div>
    </header>
}

export default Header;