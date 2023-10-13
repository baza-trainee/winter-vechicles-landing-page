import { ImgShown } from './imgShown';
import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import styles from './AboutBrigade.module.scss';

const AboutBrigade = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <section id="about">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('About.title')}</h2>
          <div className={styles.content}>
            <div className={styles.aboutBrigadeText}>
              <p>{t('About.text-1')}</p>
              <p>{t('About.text-2')}</p>
            </div>
            <div className={styles.img}>
              <ImgShown />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutBrigade;
