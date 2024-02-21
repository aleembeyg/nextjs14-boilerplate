"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const GoogleSocialLogin = () => {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL });
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={loginWithGoogle}
      >
        Login With Google
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ marginTop: "10px" }}
        onClick={loginWithGoogle}
      >
        Login With Facebook
      </Button>
    </>
  );
};

export default GoogleSocialLogin;
