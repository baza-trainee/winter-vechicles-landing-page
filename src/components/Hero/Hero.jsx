import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';

import Container from '../Container/Container';

import style from './Hero.module.scss';
import Button from '../Button/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={style.hero}>
      <Container>
        <div className={style.heroCover}>
          <div className={style.heroInfo}>
            <h1 className={style.heroTitle}>{t('hero.title')}</h1>
            <span className={style.heroLabel}>{t('hero.subcription')}</span>
            <p className={style.heroText}>
              <span>
                {t('hero.our-goal')}
                <BsArrowRight
                  preserveAspectRatio="none"
                  className={style.heroArrow}
                />
              </span>
              <span>{t('hero.sum')}</span>
            </p>
            <p className={style.heroText}>{t('hero.for')}</p>
          </div>
          <div className={style.heroButtonCover}>
            <a
              href="https://send.monobank.ua/jar/3E5FfsfiRd" /*!!Замінити лінк*/
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

export default Hero;
