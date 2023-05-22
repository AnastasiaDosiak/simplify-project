import CardLayout from "@/components/dashboard/Card/Layout/CardLayout";

export const metadata = {
    title: "Item details page",
    description: "Details of the item - seller, price and more"
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <CardLayout>{children}</CardLayout>;
}
