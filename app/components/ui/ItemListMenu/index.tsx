import React, { useState } from "react";
import Image from "next/image";

interface Props {
  name: string;
  icon: string;
  onClick?: () => void;
}

function ItemListMenu({ name, icon = "add.png", onClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
    onClick && onClick();
  };
  return (
    <li
      className="text-2xl bg-slate-400 py-3 px-5 list-none cursor-pointer border-b-2 flex justify-between items-center"
      onClick={handleMenuClick}
    >
      <span className="flex items-center gap-4">
        <span>
          <Image src={icon} width={40} height={40} color="" alt="add" />
        </span>
        <span className="text-slate-900">{name}</span>
      </span>
      <Image
        src="/arrow.png"
        width={20}
        height={20}
        alt="add"
        className={`transition duration-200 ease-in-out ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </li>
  );
}

export default ItemListMenu;
