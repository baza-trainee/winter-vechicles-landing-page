import styles from "./Footer.module.scss";
import ShareButton from "../Button/ShareButton";

const Footer = () => {
  return (
    <section id="footer" className={styles.footerContainer}>
      <h2 className={styles.footerTitle}>У єднанні - сила!</h2>
      <h2 className={styles.footerTitle}>
        Допоможи іншим дізнатися про наш збір
      </h2>
      <ShareButton />
      <p className={styles.copyright}>
        Розробка Baza Trainee Ukraine 2023 © Всі права захищені
      </p>
    </section>
  );
};
export default Footer;
