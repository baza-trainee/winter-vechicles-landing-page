import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { GoShareAndroid } from 'react-icons/go';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(!isOpen);

  return (
    <footer id="fundraising">
      <Container>
        <div className={styles.footerContainer}>
          <h2 className={styles.footerTitle}>{t('strength.title')}</h2>
          <h2 className={styles.footerTitle}>{t('strength.sharing')}</h2>
          <div className={styles.shareButton}>
            <Button
              onClick={handleOpenModal}
              text={t('strength.btn')}
              icon={<GoShareAndroid style={{ fontSize: '1.5em' }} />}
            />
            {isOpen &&
              createPortal(<Modal onClose={handleOpenModal} />, document.body)}
          </div>
          <p className={styles.copyright}>{t('footer')}</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
