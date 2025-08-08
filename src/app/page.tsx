import { Header } from "./componenets/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
    </div>
  );
}
