import NavigationBar from "../NavigationBar/NavigationBar";
export default function DashboardLayout({
    children,
    isDashboard = true
}: {
    children: React.ReactNode;
    isDashboard?: boolean;
}) {
    return (
        <>
            <NavigationBar isDashboard={isDashboard} />
            <main className="p-10 mt-[-200px]">{children}</main>
        </>
    );
}
