import CardLayout from "@/components/dashboard/Card/Layout/CardLayout";

export const metadata = {
    title: "Dashboard Items Cards",
    description: "Explore a collection of items cards in dashboard"
};
export default function Layout({ children }: { children: React.ReactNode }) {
    return <CardLayout>{children}</CardLayout>;
}
