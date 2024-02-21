"use client";

import { FC } from "react";
import { Box, ClickAwayListener, List, ListItem, Typography } from "@mui/material";
import OptimizeImage from "../optimizeImage";
import styles from "./index.module.scss";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { SlMenu, SlArrowUp } from "react-icons/sl";
import { useEffect, useState } from "react";
import FAQS from "../faqs";
import faqsList from "../../data/homePageFaqs.json";

const ComingSoonPanel: FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showDesktopSub, setShowDesktopSub] = useState(false);
  const [showPlansSub, setShowPlansSub] = useState(false);
  const [showRatesSub, setShowRatesSub] = useState(false);
  const [showMobileSub, setShowMobileSub] = useState(false);

  useEffect(() => {
    const handleRouteChangeComplete = (url: any) => {
      setShowDesktopSub(false);
      setShowPlansSub(false);
      setShowRatesSub(false);
      setShowMobileSub(false);
    };
  }, [router]);
  return (
    <>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        minHeight: "100%",
        maxWidth: "640px !important",
        paddingTop: "8%",
        margin: "auto",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <OptimizeImage
        className={styles.logoImage}
        src={"https://talkhome.co.uk/assets/Web/images/logo-top.svg"}
        alt="logo"
      />
      <Typography variant="h1" sx={{ fontSize: "3rem", paddingTop: "10px" }}>
        COMING SOON
      </Typography>
      <Typography variant="body1" fontSize={"1.2rem"} textAlign="center">
        An awesome new company for web resources is coming very soon. Enter your
        email to request an early invitation!
      </Typography>
      {status == "authenticated" && (
        <Typography variant="h4" fontSize={12}>
          User is logged-in as {session.user?.email}
        </Typography>
      )}
      <Typography variant="h3" sx={{ fontSize: "1rem", paddingTop: "20px" }}>
        Visit Our Sample Pages
      </Typography>
      <Box className={styles.linkPanel}>
        <Link href="/terms">Terms</Link>
        <Link href="/usage-policy">Usage Policy</Link>
        <ClickAwayListener onClickAway={() => setShowDesktopSub(false)}>
                <label onClick={() => setShowDesktopSub(!showDesktopSub)}>
                  Why Talk Home <IoMdArrowDropdown />
                  {showDesktopSub && (
                    <div className={styles.subLinksPanel}>
                      <SlArrowUp />
                      <List>
                        <ListItem>
                          <Link
                            href="/why-thm"
                          >
                            Why THM
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/5g">
                            Talk Home 5G
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/transfer-mobile-number">
                            Port In
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/about">
                            About Us
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="https://blog.talkhome.co.uk/" target="_blank">
                            Blog
                          </Link>
                        </ListItem>
                        
                      </List>
                    </div>
                  )}
                </label>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={() => setShowPlansSub(false)}>
                <label onClick={() => setShowPlansSub(!showPlansSub)}>
                  Plans <IoMdArrowDropdown />
                  {showPlansSub && (
                    <div className={styles.subLinksPanel}>
                      <SlArrowUp />
                      <List>
                        <ListItem>
                          <Link
                            href="/sim-only-deals/monthly"
                          >
                           Monthly Rolling
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/sim-only-deals/12-month-plan">
                            12-months Plan
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/sim-only-deals/payg">
                            PAYG Plans
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/sim-only-deals/international">
                            International Plans
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/sim-only-deals/data">
                            Data Bolt-ons
                          </Link>
                        </ListItem>
                        
                      </List>
                    </div>
                  )}
                </label>
              </ClickAwayListener>
              <ClickAwayListener onClickAway={() => setShowRatesSub(false)}>
                <label onClick={() => setShowRatesSub(!showRatesSub)}>
                  rates <IoMdArrowDropdown />
                  {showRatesSub && (
                    <div className={styles.subLinksPanel}>
                      <SlArrowUp />
                      <List>
                        <ListItem>
                          <Link
                            href="/why-thm"
                          >
                           UK Rates
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/5g">
                            International Rates
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link
                            href="/transfer-mobile-number">
                            Roaming Rates 
                          </Link>
                        </ListItem>
                        
                      </List>
                    </div>
                  )}
                </label>
              </ClickAwayListener>
        {status === "unauthenticated" && (
          <Link href="/dashboard/login">Login</Link>
        )}
        {status === "authenticated" && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              signOut({ callbackUrl: "/dashboard/login" });
            }}
          >
            logout
          </span>
        )}
      </Box>
      
    </Box>
    <Box>
        <FAQS list={faqsList.faqs}></FAQS>
      </Box>
    </>
    
  );
};

export default ComingSoonPanel;
