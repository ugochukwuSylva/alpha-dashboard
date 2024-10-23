"use client";

import { useState } from "react";
import MainContainer from "./components/MainContainer";
import SideNav from "./components/SideNav";
import EventModal from "./components/EventModal";
import SideNavContent from "./components/SideNavContent";

export default function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [clickEvents, setClickEvents] = useState<boolean>(false);

  return (
    <div
      className={`grid ${
        isCollapsed ? "grid-cols-[16rem_1fr]" : "grid-cols-[3rem_1fr]"
      } min-h-screen `}
    >
      <SideNav
        isCollapsed={isCollapsed}
        setIsCollapsed={() => setIsCollapsed((prev) => !prev)}
        clickEvents={clickEvents}
        setClickEvents={() => setClickEvents((prev) => !prev)}
      />

      <MainContainer />
      {clickEvents && (
        <EventModal setClickEvents={() => setClickEvents(false)} />
      )}
    </div>
  );
}
