import NavigationBar from "../NavigationBar/NavigationBar";
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavigationBar />
            <main className="p-10 mt-[-200px]">{children}</main>
        </>
    );
}
