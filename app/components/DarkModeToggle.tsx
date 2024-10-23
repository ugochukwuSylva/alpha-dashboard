"use client";

import { useState } from "react";

type Props = {
  isCollapsed: boolean;
};

export default function DarkModeToggle({ isCollapsed }: Props) {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    isCollapsed && (
      <div className=" flex gap-3 items-center cursor-pointer p-1 ">
        <div
          onClick={() => setIsToggled((prev) => !prev)}
          className="w-6 h-4 rounded-full bg-stone-200 relative "
        >
          <div
            className={`h-3 bg-white w-3 rounded-full absolute transition-all duration-700  ${
              isToggled ? "right-0" : "left-0"
            } top-0.5 `}
          ></div>
        </div>
        <span className="text-stone-600">
          {isToggled ? "Light" : "Dark"} mode
        </span>
      </div>
    )
  );
}
