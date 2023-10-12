import Container from '../Container/Container';
import { fetchAccountBalance } from '../../fetchAccountBalance';
import styles from './ProgressBar.module.scss';
import { useQuery } from '@tanstack/react-query';

const ProgressBar = () => {
  const { data: balance } = useQuery(['accountBalance'], fetchAccountBalance, {
    refetchInterval: 60000,
  });

  const width = balance ? `${Math.floor((balance / 50000) * 100)}%` : '5%';

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.title}>
          Готуємось разом до нашої переможної зими
        </div>
        <div className={styles.ProgressBar}>
          <div className={styles.img}>
            <img src="src/images/progress-bar/img.png" alt="heart" />
          </div>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: { width } }}></div>
          </div>
          <div className={styles.text}>
            <div className={styles.first}>
              <h3>Вже зібрано</h3>
              <h4>{balance || 0} грн.</h4>
            </div>
            <div className={styles.second}>
              <h3>Наша мета</h3>
              <h4>50 000 грн.</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProgressBar;
