import DashboardTemplate from "@/layouts/dashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardTemplate>{children}</DashboardTemplate>
    </>
  );
}
