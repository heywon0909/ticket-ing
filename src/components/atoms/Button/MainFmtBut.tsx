import { butInfo } from "../../molecules/main/MainButs";

type butProps = {
  info: butInfo;
};

const MainFmtBut = ({ info }: butProps) => {
  const { title, color } = info;
  return (
    <button className={`w-10 h-10  rounded-md m-1 ${color} text-sm hover:text-white`}>
      {title}
    </button>
  );
};

export default MainFmtBut;
