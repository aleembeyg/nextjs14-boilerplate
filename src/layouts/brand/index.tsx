import styles from "./index.module.scss";
import OptimizeImage from "@/components/optimizeImage";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function BrandTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className={styles.brandContainer}>
      <div className={styles.content}>
        <Link href="/" style={{ position: "relative" }}>
          <OptimizeImage
            className={styles.logoImage}
            src={"https://talkhome.co.uk/assets/Web/images/logo-top.svg"}
            alt="logo"
          />
        </Link>
        {children}
        <Typography variant="body2" marginTop={"20px"}>
          Copyright © {new Date().getFullYear()} Talk Home. All rights reserved.
        </Typography>
      </div>
    </Container>
  );
}
