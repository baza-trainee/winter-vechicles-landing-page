import { ImgShown } from './ImgShown';
import { useTranslation } from 'react-i18next';
import Container from '../Container/Container';
import styles from './AboutBrigade.module.scss';
import Button from '../Button/Button';

const AboutBrigade = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <section id="about">
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
            <a href="https://www.monobank.com.ua/" /*!!Замінити лінк*/
              target="_blank"
              rel="noopener noreferrer">
              <Button text={t("hero.btn")} />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutBrigade;
