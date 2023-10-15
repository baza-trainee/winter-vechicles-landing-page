import { useTranslation } from 'react-i18next';
import { fetchAccountBalance } from '../../fetchAccountBalance';
import { useQuery } from '@tanstack/react-query';
import Container from "../Container/Container";
import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
  const { t } = useTranslation();
  const { data: balance } = useQuery(['accountBalance'], fetchAccountBalance, {
    refetchInterval: 60000,
  });
  const width = balance ? `${Math.floor((balance / 50000) * 100)}%` : '5%';

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.title}>{t('progressBar.Preparing')}</div>
        <div className={styles.ProgressBar}>
          <div className={styles.img}>
            <img src="src/images/progress-bar/img.png" alt="heart" />
          </div>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: { width } }}></div>
          </div>
          <div className={styles.text}>
            <div className={styles.first}>
              <h3>`${balance || 0}${t('progressBar.already')}`</h3>
              <h4>{t('progressBar.sum-start')}</h4>
            </div>
            <div className={styles.second}>
              <h3>{t('progressBar.our-goal')}</h3>
              <h4>{t('progressBar.sum')}</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProgressBar;
