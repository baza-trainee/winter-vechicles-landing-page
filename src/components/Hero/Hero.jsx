import { useTranslation } from 'react-i18next';
import { BsArrowRight } from 'react-icons/bs';

import Container from '../Container/Container';

import style from './Hero.module.scss';
import Button from '../Button/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={style.hero}>
        <Container>
          <div className={style.hero__cover}>
            <div className={style.hero__info}>
              <h1 className={style.hero__title}>{t('hero.title')}</h1>
              <span className={style.hero__label}>{t('hero.subcription')}</span>
              <p className={style.hero__text}>
                <span>
                  {t('hero.our-goal')}
                  <BsArrowRight
                    preserveAspectRatio="none"
                    className={style.hero__arrow}
                  />
                </span>
                <span>{t('hero.sum')}</span>
              </p>
              <p className={style.hero__text}>{t('hero.for')}</p>
            </div>
            <div className={style.hero__buttonCover}>
              <a href="https://www.monobank.com.ua/" /*!!Замінити лінк*/
                target="_blank"
                rel="noopener noreferrer">
                <Button text={t("hero.btn")} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
