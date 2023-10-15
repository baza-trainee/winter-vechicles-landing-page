import styles from "./Footer.module.scss";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { createPortal } from 'react-dom';
import Button from "../Button/Button";
import { GoShareAndroid } from "react-icons/go";

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpenModal = () => setIsOpen(!isOpen);

  return (
    <section id="fundraising" className={styles.footerContainer}>
      <h2 className={styles.footerTitle}>
        {t("strength.title")}
      </h2>
      <h2 className={styles.footerTitle}>
        {t("strength.sharing")}
      </h2>
      <div className={styles.shareButton}>
          <Button
            onClick={handleOpenModal}
            text={t("strength.btn")}
            icon={ <GoShareAndroid style={{fontSize:"1.5em"}}/>}
          />
          {isOpen && createPortal(
            <Modal onClose={handleOpenModal}/>,
            document.body
          )}
      </div>
      <p className={styles.copyright}>
        {t("footer")}
      </p>
    </section>
  );
};
export default Footer;