import SocialLogin from "@/components/socialLogin";
import { authOptions } from "@/libs/authOptions";
import { Card, CardContent, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <Card sx={{ margin: "auto" }}>
      <CardContent>
        <SocialLogin />
      </CardContent>
    </Card>
  );
}
