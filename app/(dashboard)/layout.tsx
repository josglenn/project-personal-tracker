import React from "react";
import ProfileHeader from "../components/account/profileHeader";
import Dashboard from "../components/dashboard/dashboard";
import { NunitoSans } from "../components/ui/fonts";
function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileHeader />
      <Dashboard />
      <div className={`px-10 ${NunitoSans.className}`}>{children}</div>
    </>
  );
}

export default DashBoardLayout;
