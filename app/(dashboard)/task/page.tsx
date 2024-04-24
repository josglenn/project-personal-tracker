"use client";

import ItemListMenu from "@/app/components/ui/ItemListMenu";
import ItemContainer from "@/app/components/ui/itemContainer.tsx";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ITEM_MENU } from "@/app/constants/menu";
import { transitionStyle } from "@/app/constants/styles";

interface IsopenInterface {
  [key: string]: boolean;
  task: boolean;
  routine: boolean;
  dailytask: boolean;
}
function Task() {
  const [segment, setSegment] = useState("");
  const [isOpen, setIsOpen] = useState<IsopenInterface>({
    task: false,
    routine: false,
    dailytask: false,
  });

  useEffect(() => {
    setSegment("task");
    return () => setSegment("");
  }, []);

  const handleOpen = (value: string) => {
    setIsOpen({ ...isOpen, [value]: !isOpen[value] });
  };

  const segmentStyle = segment === "task" ? " opacity-100" : "opacity-0";

  return (
    <div className=" flex bg-purple-900  h-[75vh] rounded-lg gap-10 p-10">
      <div
        className={`columns-auto flex-1 rounded-l-lg  bg-slate-400 p-4 ${transitionStyle} ${segmentStyle}`}
      >
        Area
      </div>
      <div
        className={`flex flex-col flex-[.6] rounded-r-lg ${transitionStyle} ${segmentStyle}`}
      >
        {ITEM_MENU.map((item) => (
          <>
            <ItemListMenu
              onClick={() => handleOpen(item.value)}
              key={item.name}
              icon={item.icon}
              name={item.name}
            />
            <ItemContainer isOpen={isOpen[item.value]} />
          </>
        ))}
        <div className="flex-1 bg-slate-400">Task Overview</div>
      </div>
    </div>
  );
}

export default Task;
