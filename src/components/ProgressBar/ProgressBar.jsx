import Container from '../Container/Container';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { fetchAccountBalance } from '../../helpers/fetchAccountBalance';
import car from '../../images/progress-bar/car.svg';
import heart from '../../images/progress-bar/heart.svg';
import styles from './ProgressBar.module.scss';

const formatBalance = (balance = 0) => {
  if (balance < 1000) {
    return balance.toString();
  } else {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
};

const ProgressBar = () => {
  const { t } = useTranslation();
  const { data: balance } = useQuery(['accountBalance'], fetchAccountBalance, {
    refetchInterval: 60000,
  });

  const width = balance ? `${Math.floor((balance / 50000) * 100)}%` : '0%';
  let margin =
    balance > 7500 ? `${Math.floor((balance / 50000) * 100 - 8)}%` : '0%';
  if (balance > 42500) {
    margin = '85%';
  }
  const formattedBalance = formatBalance(balance);

  return (
    <section id="goal" className={styles.wrapper}>
      <Container>
        <div className={styles.title}>{t('progressBar.Preparing')}</div>
        <div className={styles.ProgressBar}>
          <div className={styles.imgcontainer}>
            <div className={styles.img} style={{ marginLeft: margin }}>
              <div className={styles.heart}>
                <img src={heart} alt="heart" style={{ maxWidth: '100%' }} />
              </div>
              <img src={car} alt="car" />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.text}>
              <div className={styles.first1}>
                <h3>{t('progressBar.already')}</h3>
                <h4>{`${formattedBalance || 0} ${t(
                  'progressBar.sum-start'
                )}`}</h4>
              </div>
            </div>
            <div className={styles.bar}>
              <div className={styles.fill} style={{ width: width }}></div>
            </div>
            <div className={styles.text}>
              <div className={styles.first2}>
                <h3>{t('progressBar.already')}</h3>
                <h4>{`${formattedBalance || 0} ${t(
                  'progressBar.sum-start'
                )}`}</h4>
              </div>
              <div className={styles.second}>
                <h3>{t('progressBar.our-goal')}</h3>
                <h4>{t('progressBar.sum')}</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProgressBar;
