"use client";

import { useState } from "react";
import ListItem from "./ListItem";
//
import { LuHome } from "react-icons/lu";
import { MdEventAvailable } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import UserProfile from "./UserProfile";
import DarkModeToggle from "./DarkModeToggle";

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: () => void;
};

export default function SideNavContent({ isCollapsed, setIsCollapsed }: Props) {
  const [active, setActive] = useState<number>(0);

  const lists = [
    "Home",
    "Events",
    "Speakers",
    "Reports",
    "Notifications",
    "Message",
    "Settings",
  ];

  const icons = [
    <LuHome key={1} />,
    <MdEventAvailable key={2} />,
    <RiUserVoiceLine key={3} />,
    <HiOutlineDocumentReport key={4} />,
    <IoIosNotificationsOutline key={5} />,
    <IoChatbubblesOutline key={6} />,
    <IoSettingsOutline key={7} />,
  ];

  function handleCollapsed(i: number) {
    setActive(i);
  }

  return (
    <ul className=" flex flex-col gap-2">
      {lists.map((list, index) => (
        <ListItem
          item={list}
          key={list}
          isActive={index === active}
          icon={icons[index]}
          handleActive={() => handleCollapsed(index)}
          isCollapsed={isCollapsed}
        />
      ))}

      <li>
        <DarkModeToggle isCollapsed={isCollapsed} />
      </li>

      <li
        onClick={setIsCollapsed}
        className="flex gap-3 items-center cursor-pointer p-1 hover:bg-stone-50 hover:text-blue-500"
      >
        {!isCollapsed ? (
          <MdOutlineKeyboardDoubleArrowRight
            className={`${!isCollapsed && "scale-150"}`}
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowLeft />
        )}
        <span className="text-stone-600">{isCollapsed && "Collapsed"}</span>
      </li>

      <li className="h-12">
        <UserProfile isCollapsed={isCollapsed} />
      </li>
    </ul>
  );
}
