import React from "react";
import ProfileHeader from "../components/account/profileHeader";
import Dashboard from "../components/dashboard/dashboard";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileHeader />
      <Dashboard />
      <div className="px-10 ">{children}</div>
    </>
  );
}

export default DashBoardLayout;
