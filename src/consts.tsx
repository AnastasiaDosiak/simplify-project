import { HomeIcon, InboxIcon, FolderIcon } from "@heroicons/react/24/outline";

export const navItems = [
    {
        text: "Dashboard",
        link: "/dashboard/list",
        targetSegment: null,
        icon: <HomeIcon width={24} height={24} />
    },
    {
        text: "Browse",
        link: "/dashboard/browse",
        targetSegment: "browse",
        icon: <FolderIcon width={24} height={24} />
    },
    {
        text: "Card",
        link: "/dashboard/card",
        targetSegment: "card",
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
