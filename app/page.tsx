import Image from "next/image";
import styles from "./page.module.css";
import { GradientBackGroundCon } from "@/components/QuoteGenerator";

export default function Home() {
  return (
    <main className={styles.main}>
      <GradientBackGroundCon></GradientBackGroundCon>
    </main>
  );
}
