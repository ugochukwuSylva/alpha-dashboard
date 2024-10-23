import React from "react";
import Logo from "./Logo";
import SideNavContent from "./SideNavContent";

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: () => void;
  clickEvents: boolean;
  setClickEvents: () => void;
};

export default function SideNav({
  isCollapsed,
  setIsCollapsed,

  setClickEvents,
}: Props) {
  return (
    <aside className="w-full border-r-2 p-2">
      <Logo isCollapsed={isCollapsed} />

      <SideNavContent
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        setClickEvents={setClickEvents}
      />
    </aside>
  );
}
