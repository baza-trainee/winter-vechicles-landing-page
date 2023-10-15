import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import styles from './RunningText.module.scss';

const RunningText = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} >
      <Marquee autoFill={true} speed={80}>
        <div className={styles.runningBlock}>
          <p className={styles.runningText}>{t('running-line.support')}</p>
          <p className={styles.runningText}>{t('running-line.victory')}</p>
        </div>
      </Marquee>
    </div>
  );
};

export default RunningText;
