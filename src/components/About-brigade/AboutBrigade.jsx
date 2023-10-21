import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { ImgShown } from './imgShown';
import styles from './AboutBrigade.module.scss';

const AboutBrigade = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.about} id="about">
      <Container>
        <div className={styles.container}>
          <h2 className={styles.aboutTitle}>{t('about.title')}</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>{t('about.text-1')}</p>
              <p>{t('about.text-2')}</p>
            </div>
            <div className={styles.img}>
              <ImgShown />
            </div>
          </div>
          <div className={styles.button}>
            <a
              href="https://send.monobank.ua/jar/3E5FfsfiRd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text={t('hero.btn')} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBrigade;
