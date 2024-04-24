import React from "react";

interface Props {
  isOpen: boolean;
  children?: React.ReactNode;
}

function ItemContainer({ isOpen, children }: Props) {
  return (
    <div
      className={` transition-[min-height] ease-in-out duration-300 bg-slate-100 ${
        isOpen ? "min-h-[200px]" : "min-h-0"
      }`}
    >
      {children}
    </div>
  );
}

export default ItemContainer;
