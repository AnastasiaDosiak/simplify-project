import DashboardLayout from "@/components/dashboard/List/Layout/DashboardLayout";

export const metadata = {
    title: "Dashboard Items List",
    description: "Explore a collection of items"
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
