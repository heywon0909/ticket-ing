import MainFmtBut from "../../atoms/Button/MainFmtBut";

export interface butInfo {
  title: string;
  color: string;
}

const MainFmtButs = () => {
  return (
    <div className="w-4/5 flex p-2">
      <MainFmtBut info={{ title: "지난 티켓", color: "bg-red-200" }} />
      <MainFmtBut info={{ title: "올해 티켓", color: "bg-yellow-200" }} />
    </div>
  );
};
export default MainFmtButs;
