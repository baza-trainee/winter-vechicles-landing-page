import Marquee from 'react-fast-marquee';
import styles from './RunningText.module.scss';

const RunningText = () => {
  return (
    <Marquee autoFill={true} speed={80}>
      <div className={styles.runningBlock}>
        <p className={styles.runningText}>Підтримай наших зараз</p>
        <p className={styles.runningText}>Разом до переможної зими</p>
      </div>
    </Marquee>
  );
};

export default RunningText;
