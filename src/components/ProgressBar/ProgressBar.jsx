import Container from '../Container/Container';
import { fetchAccountBalance } from '../../helpers/fetchAccountBalance';
import image from '../../images/progress-bar/img.png';
import styles from './ProgressBar.module.scss';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

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
    <section id='goal' className={styles.wrapper}>
      <Container>
        <div className={styles.title}>{t('progressBar.Preparing')}</div>
        <div className={styles.ProgressBar}>
          <div className={styles.imgcontainer}>
          <div className={styles.img} style={{ marginLeft: margin }}>
            <img src={image} alt="heart" />
          </div></div>
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
