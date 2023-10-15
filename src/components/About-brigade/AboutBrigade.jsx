import Container from '../Container/Container';
import  HelpButton  from '../Button/HelpButton';
import { ImgShown } from './imgShown';
import styles from './AboutBrigade.module.scss';
import { useTranslation } from 'react-i18next';

const AboutBrigade = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <section id="about">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('about.title')}</h2>
          <div className={styles.content}>
            <div className={styles.aboutBrigadeText}>
              <p>{t('about.text-1')}</p>
              <p>{t('about.text-2')}</p>
            </div>
            <div className={styles.img}>
              <ImgShown />
            </div>
          </div>
          <div className={styles.button}>
            <HelpButton />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutBrigade;
