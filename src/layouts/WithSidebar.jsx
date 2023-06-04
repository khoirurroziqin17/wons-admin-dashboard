import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarButton from "../components/Sidebar/SidebarButton";
import SidebarItem from "../components/Sidebar/SidebarItem";
import SidebarLogo from "../components/Sidebar/SidebarLogo";
import {
  IoGrid,
  IoStatsChart,
  IoReceipt,
  IoCalendar,
  IoChatboxEllipses,
  IoNotifications,
  IoSettings,
  IoCalendarNumber,
} from "react-icons/io5";

function WithSidebar({ children }) {
  const [showAside, setShowAside] = useState(false);
  let { pathname } = useLocation();

  return (
    <>
      <SidebarButton
        showAside={showAside}
        onClick={() => setShowAside(!showAside)}
      />
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          showAside ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <SidebarLogo />
          <ul className="space-y-2 font-medium">
            <SidebarItem
              active={pathname == "/"}
              text="Dashboard"
              icon={<IoGrid size={18} />}
            />
            <SidebarItem
              href="/analytics"
              active={pathname == "/analytics"}
              text={"Analytics"}
              label={"Pro"}
              icon={<IoStatsChart size={18} />}
            />
            <SidebarItem text={"Invoice"} icon={<IoReceipt size={18} />} />
            <SidebarItem
              text={"Schedule"}
              icon={<IoCalendarNumber size={18} />}
            />
            <SidebarItem text={"Calender"} icon={<IoCalendar size={18} />} />
            <SidebarItem
              text={"Messages"}
              icon={<IoChatboxEllipses size={18} />}
              label={40}
              labelColor
            />
            <SidebarItem
              text={"Notification"}
              icon={<IoNotifications size={18} />}
            />
            <SidebarItem text={"Settings"} icon={<IoSettings size={18} />} />
          </ul>
        </div>
      </aside>

      <div className="p-4 md:ml-64">
        <div className="mt-20 ">{children}</div>
      </div>
    </>
  );
}

export default WithSidebar;
