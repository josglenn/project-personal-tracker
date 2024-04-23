import React from "react";
import DashboardLayout from "@/app/components/dashboard/dashboard";
import ProfileHeader from "@/app/components/account/profileHeader";

function Dashboard() {
  return (
    <>
      <ProfileHeader />
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
