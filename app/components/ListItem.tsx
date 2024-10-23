type Props = {
  item: string;
  isActive: boolean;
  isCollapsed: boolean;
  icon: React.ReactNode;
  handleActive: () => void;
  handleClickEvent: () => void;
  isModal: boolean;
};

export default function ListItem({
  item,
  isActive,
  isCollapsed,
  icon,
  handleActive,
  handleClickEvent,
  isModal,
}: Props) {
  return (
    <li
      onClick={() => {
        handleActive();
        isModal && handleClickEvent();
      }}
      className={`relative p-1 cursor-pointer flex items-center gap-5 hover:bg-stone-50 hover:text-blue-500 transition-all duration-100 ${
        isActive ? "bg-stone-50 text-blue-500" : "text-stone-600 "
      }`}
    >
      {<span className={` ${!isCollapsed && "scale-125 mb-3"}`}>{icon}</span>}{" "}
      {isCollapsed && <span>{item}</span>}{" "}
      {isCollapsed && item.startsWith("Notifications") && (
        <span className="p-2 h-6 w-6 flex justify-center items-center ml-auto bg-red-500 rounded-full text-white ">
          3
        </span>
      )}
      {!isCollapsed && item.startsWith("Notifications") && (
        <div className="h-1 w-1 bg-red-500 p-1 rounded-full absolute left-5 -top-0"></div>
      )}
    </li>
  );
}
