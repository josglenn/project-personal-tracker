"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

function NavMenu() {
  const segment = useSelectedLayoutSegment();

  const activeMenuStyle =
    "transition text-2xl  ease-in delay-75 hover:underline hover:-translate-y-1 hover:scale-110 hover:duration-300";

  return (
    <div className="flex justify-center items-center gap-4">
      <h4
        className={
          segment === "task"
            ? `${activeMenuStyle} font-semibold text-purple-400 underline`
            : activeMenuStyle
        }
      >
        <Link href={"/dashboard/task"}>Task</Link>
      </h4>
      <h4
        className={
          segment === "expense"
            ? `${activeMenuStyle} font-semibold text-purple-400 underline`
            : activeMenuStyle
        }
      >
        <Link href={"/dashboard/expense"}>Expense</Link>
      </h4>
    </div>
  );
}

export default NavMenu;
