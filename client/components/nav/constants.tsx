import {Icon} from "@iconify/react";
import {SideNavItem} from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "DASHBOARD",
        path: "/dashboard",
        icon: <Icon icon="lucide:home" width="24" height="24"/>,
    },
    {
        title: "TASK MANAGEMENT",
        path: "/modules/task/taskDashboard",
        icon: <Icon icon="lucide:home" width="24" height="24"/>,   
        submenu: true,
        subMenuItems: [
            {title: "RECURRING", path: "/modules/task/taskRecurring"},
            {title: "NON-RECURRING", path: "/modules/task/taskNonRecur"},
            {title: "REPORT", path: "/modules/task/report"},
        ]     
    }
]