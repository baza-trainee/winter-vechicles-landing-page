import { useState } from "react";
import { createPortal } from 'react-dom';
import { useTranslation } from "react-i18next";
import { GoShareAndroid } from "react-icons/go";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Modal from "../modals/Modal/Modal";
import styles from "./Footer.module.scss";
import Overlay from "../Overlay/Overlay";
import ThanksModal from "../modals/ThanksModal/ThanksModal";

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const response = false;

  // useEffect(() => {
  //   console.log('re');
  //   setIsOpen(!isOpen)
  // }, [response]);

  const handleOpenModal = () => setIsOpen(!isOpen);

  return (
    <Container>
      <footer id="fundraising">
        <div className={styles.footerContainer}>
          <h2 className={styles.footerTitle}>{t('strength.title')}</h2>
          <h2 className={styles.footerTitle}>{t('strength.sharing')}</h2>
          <Button
            onClick={handleOpenModal}
            text={t('strength.btn')}
            icon={<GoShareAndroid size="30" />}
          />
          {isOpen &&
            createPortal(
              <Overlay onClose={handleOpenModal} >
                {
                  response ?
                  <ThanksModal /> :
                  <Modal onClose={handleOpenModal} />
                }
              </Overlay>,
              document.body
            )}
        </div>
        <p className={styles.footerCopyright}>{t('footer')}</p>
      </footer>
    </Container>
  );
};
export default Footer;