import DashboardLayout from "@/components/dashboard/List/Layout/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <DashboardLayout isDashboard={false}>{children}</DashboardLayout>;
}
