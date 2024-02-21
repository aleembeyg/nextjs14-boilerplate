import MainTemplate from "@/layouts/main";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainTemplate>{children}</MainTemplate>
    </>
  );
}
