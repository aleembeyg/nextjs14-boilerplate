import "@/styles/globals.scss";
import type { Metadata } from "next";
import theme from "../theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import GoogleAnalyticsConfig from "@/components/googleAnalyticsConfig";
import GoogleAnalyticsIframe from "@/components/googleAnalyticsConfig/iframe";
import { NextAuthProvider } from "@/components/nextAuthProvider";
import { TopProgressBar } from "@/components/topProgressBar";
import { ChildNode } from "@/libs/types";

export const metadata: Metadata = {
  title: "Talk Home Mobile - Explore Our SIM-only Deals | Free PAYG SIM",
  description:
    "Searching for a free UK SIM? Discover the superior SIM-only deals, data bundles, International mobile top ups, mobile plans with Talk Home Mobile.",
};

export default function RootLayout({ children }: ChildNode) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalyticsConfig />
      </head>
      <body className="comingsoon">
        <GoogleAnalyticsIframe />
        <TopProgressBar />
        <NextAuthProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
