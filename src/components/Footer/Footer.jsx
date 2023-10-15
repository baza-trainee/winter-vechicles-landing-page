import styles from "./Footer.module.scss";
import ShareButton from "../Button/ShareButton";
import { useTranslation } from "react-i18next";
import { ModalContext } from "../../contexts/ModalContext";
import { useState } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="fundraising" className={styles.footerContainer}>
      <h2 className={styles.footerTitle}>
        {t("strength.title")}
      </h2>
      <h2 className={styles.footerTitle}>
        {t("strength.sharing")}
      </h2>
      <div className={styles.shareButton}>
        <ModalContext.Provider value={{isOpen, setIsOpen}}>
          <ShareButton />
        </ModalContext.Provider>
      </div>
      <p className={styles.copyright}>
        {t("footer")}
      </p>
    </section>
  );
};
export default Footer;