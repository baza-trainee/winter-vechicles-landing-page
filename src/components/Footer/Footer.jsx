import styles from "./Footer.module.scss";
import ShareButton from "../Button/ShareButton";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section id="fundraising" className={styles.footerContainer}>
      <Modal/>
      <h2 className={styles.footerTitle}>
        {t("strength.title")}
      </h2>
      <h2 className={styles.footerTitle}>
        {t("strength.sharing")}
      </h2>
      <div className={styles.shareButton}>
        <ShareButton />
      </div>
      <p className={styles.copyright}>
        {t("footer")}
      </p>
    </section>
  );
};
export default Footer;