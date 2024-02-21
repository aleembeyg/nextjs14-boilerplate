import Image from "next/image";
import styles from "./index.module.scss";
import { OptimizeImageProps } from "@/libs/types";

const OptimizeImage = (props: OptimizeImageProps) => {
  return (
    <Image
      priority
      className={styles.optimizeImage + " " + props.className}
      sizes="(max-width: 768px) 60vw, (max-width: 1200px) 80vw"
      fill
      src={props.src}
      alt={props.alt}
    />
  );
};

export default OptimizeImage;
