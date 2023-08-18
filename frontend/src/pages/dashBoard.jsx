import React from "react";
// import DashboardStatsGrid from "./components/DashboardStatsGrid";

import Obatlist from "./obatList";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div> */}
      <Obatlist />
    </div>
  );
}
