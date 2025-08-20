import { Footer } from "./componenets/footer/Footer";
import { Header } from "./componenets/header/Header";
import { Main } from "./componenets/main/Main";
import { PopupWrapper } from "./componenets/popups/popupWrapper/PopupWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <PopupWrapper />
      <Footer />
    </div>
  );
}
