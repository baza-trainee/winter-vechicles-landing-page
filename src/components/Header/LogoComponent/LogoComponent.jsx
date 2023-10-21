import { useTranslation } from 'react-i18next';
import { LogoSvg, LogoSvgMobile } from './LogoSvg/LogoSvg';
import styles from './LogoComponent.module.scss';

const LogoComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.logo}>
      <span className={styles.logo1}>{t('header.logo-1')}</span>
      <span className={styles.spanWrapper}>
        <span className={styles.spanLeft}>{t('header.logo-2')}</span>
        <LogoSvg />
        <LogoSvgMobile />
        <span className={styles.spanRight}>{t('header.logo-3')}</span>
      </span>
    </div>
  );
};

export default LogoComponent;
