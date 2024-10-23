"use client";

import { useState } from "react";
import MainContainer from "./components/MainContainer";
import SideNav from "./components/SideNav";

export default function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div
      className={`grid ${
        isCollapsed ? "grid-cols-[16rem_1fr]" : "grid-cols-[3rem_1fr]"
      } min-h-screen`}
    >
      <SideNav
        isCollapsed={isCollapsed}
        setIsCollapsed={() => setIsCollapsed((prev) => !prev)}
      />
      <MainContainer />
    </div>
  );
}
