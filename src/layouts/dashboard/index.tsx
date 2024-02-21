import { ChildNode } from "@/libs/types";

export default function DashboardTemplate({ children }: ChildNode) {
  console.log("Dashboard");
  return <>{children}</>;
}
