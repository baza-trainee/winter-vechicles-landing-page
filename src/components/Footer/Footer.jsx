import { useTranslation } from 'react-i18next';
import { GoShareAndroid } from 'react-icons/go';
import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <footer id="fundraising">
        <div className={styles.footerContainer}>
          <h2 className={styles.footerTitle}>{t('strength.title')}</h2>
          <h2 className={styles.footerTitle}>{t('strength.sharing')}</h2>
          <Button
            text={t('strength.btn')}
            icon={<GoShareAndroid size="30" />}
            share
          />
        </div>
        <p className={styles.footerCopyright}>{t('footer')}</p>
      </footer>
    </Container>
  );
};
export default Footer;
