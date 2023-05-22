import { HomeIcon, InboxIcon, FolderIcon } from "@heroicons/react/24/outline";

export const navItems = [
    {
        text: "Dashboard",
        link: "/dashboard/list",
        icon: <HomeIcon width={24} height={24} />
    },
    {
        text: "Browse",
        link: "/dashboard/list",
        icon: <FolderIcon width={24} height={24} />
    },
    {
        text: "Cart",
        link: "/dashboard/card",
        icon: <InboxIcon width={24} height={24} />
    }
];

export const productInformationSections = [
    {
        name: "Brand",
        item: "brand"
    },
    {
        name: "Model Name",
        item: "name"
    },
    {
        name: "Color",
        item: "color"
    },
    {
        name: "Category",
        item: "category"
    }
];
