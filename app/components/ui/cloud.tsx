import React from "react";
import "./style.css";

function Cloud({ style }: { style: string }) {
  return (
    <div className={`flex justify-center`}>
      <div
        className={`${style} transition-[all] duration-500 ease-in-out delay-75 cloud`}
      ></div>
    </div>
  );
}

export default Cloud;
