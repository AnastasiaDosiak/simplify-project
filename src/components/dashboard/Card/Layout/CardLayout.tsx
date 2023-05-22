import NavigationBar from "@/components/dashboard/Card/NavigationBar/NavigationBar";

export default function CardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex justify-between overflow-hidden h-screen">
            <NavigationBar />
            <main className="w-[80%] overflow-y-scroll">{children}</main>
        </div>
    );
}
