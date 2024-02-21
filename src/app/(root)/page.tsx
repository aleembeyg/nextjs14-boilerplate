import ComingSoonPanel from "@/components/comingSoonPanel";
import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

export default function Home() {
  //const session = await getServerSession(authOptions);
  return <ComingSoonPanel />;
}
