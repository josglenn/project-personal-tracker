"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Cloud from "../ui/cloud";

function NavMenu() {
  const segment = useSelectedLayoutSegment();

  const activeMenuStyle =
    "transition text-2xl  ease-in delay-75 hover:underline hover:-translate-y-1 hover:scale-110 hover:duration-300";

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <h4
          className={
            segment === "task"
              ? `${activeMenuStyle} font-semibold text-purple-800 underline -translate-y-1 scale-110`
              : activeMenuStyle
          }
        >
          <Link href={"/task"}>Task</Link>
        </h4>
        <h4
          className={
            segment === "expense"
              ? `${activeMenuStyle} font-semibold text-purple-800 underline -translate-y-1 scale-110`
              : activeMenuStyle
          }
        >
          <Link href={"/expense"}>Expense</Link>
        </h4>
      </div>
      <Cloud
        style={segment === "expense" ? " translate-x-8" : " -translate-x-14"}
      />
    </>
  );
}

export default NavMenu;
