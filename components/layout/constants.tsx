import {Icon} from "@iconify/react";
import {SideNavItem} from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: "DASHBOARD",
        path: "/dashboard",
        icon: <Icon icon="lucide:layout-dashboard" width="16" height="16"/>,
    },
    {
        title: "TASK MANAGEMENT",
        path: "/modules/task/taskDashboard",
        icon: <Icon icon="lucide:clipboard-list" width="16" height="16"/>,   
        submenu: true,
        subMenuItems: [
            {title: "Overview", path: "/modules/task/taskDashboard"},
            {title: "Recurring", path: "/modules/task/taskRecurring"},
            {title: "Non-Recurring", path: "/modules/task/taskNonRecur"},
            {title: "Report", path: "/modules/task/report"},
        ]     
    },
    {
        title: "ENERGY",
        path: "/modules/energy/energyDashboard",
        icon: <Icon icon="lucide:zap" width="16" height="16"/>,   
        submenu: true,
        subMenuItems: [
            {title: "Overview", path: "/modules/energy/energyDashboard"},
            {title: "Spade", path: "/modules/energy/energySpade"},
            {title: "Electricity", path: "/modules/energy/energyElectricity"},
            {title: "Voltage", path: "/modules/energy/energyVoltage"},
            {title: "Loads", path: "/modules/energy/energyLoads"},
        ]     
    },
    {
        title: "DIGITAL FORMS",
        path: "/modules/digital-form/formDashboard",
        icon: <Icon icon="lucide:files" width="16" height="16"/>,
        submenu: true,
        subMenuItems: [
            {title: "Overview", path: "/modules/digital-form/formDashboard"},
            {title: "Application Menu", path: "/modules/digital-form/menuForm"},
        ]
    },
    {
        title: "MAINTENANCE",
        path: "https://maintenance.ipsolutions4u.com",
        icon: <Icon icon="lucide:hammer" width="16" height="16"/>,
    },
    {
        title: "COMMUNITY",
        path: "https://community.ipsolutions4u.com",
        icon: <Icon icon="lucide:users" width="16" height="16"/>,
    },
    {
        title: "OPERATIONS",
        path: "https://operation.ipsolutions4u.com",
        icon: <Icon icon="lucide:sliders" width="16" height="16"/>,
    },
    {
        title: "DEFECT",
        path: "https://defect.ipsolutions4u.com",
        icon: <Icon icon="lucide:x-circle" width="16" height="16"/>,
    },
    {
        title: "PROCUREMENT",
        path: "https://procurement.ipsolutions4u.com",
        icon: <Icon icon="lucide:shopping-bag" width="16" height="16"/>,
    },
    {
        title: "STATISTIC (WIP)",
        path: "",
        icon: <Icon icon="lucide:pie-chart" width="16" height="16"/>,
    },
    {
        title: "FINANCE (WIP)",
        path: "",
        icon: <Icon icon="lucide:circle-dollar-sign" width="16" height="16"/>,
    },
]