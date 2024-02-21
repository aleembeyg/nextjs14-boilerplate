import { ChildNode } from "@/libs/types";

export default function MainTemplate({ children }: ChildNode) {
  return <section className="coming-soon">{children}</section>;
}
