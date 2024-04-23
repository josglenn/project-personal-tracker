"use client";

import Image from "next/image";
import React, { useState } from "react";

function ProfileHeader() {
  const [signIn, setSignIn] = useState(true);
  const name = "John";

  return (
    <div className="flex py-7 px-4 items-center justify-between">
      <p className="font-bold text-4xl align-middle">
        <span className="text-purple-800">Person</span>al Tracker
      </p>
      {signIn ? (
        <div className="flex items-center">
          <h4 className="text-2xl">Hello, {name}</h4>
          <button
            className="btn text-2xl py-2 px-2"
            onClick={() => setSignIn(false)}
          >
            <Image src="/avatar.png" width={70} height={70} alt="avatar" />
          </button>
        </div>
      ) : (
        <button className="btn border border-slate-300 text-2xl py-2 px-7">
          Sign In
        </button>
      )}
    </div>
  );
}

export default ProfileHeader;
