import BrandTemplate from "@/layouts/brand";

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BrandTemplate>{children}</BrandTemplate>
    </>
  );
}
