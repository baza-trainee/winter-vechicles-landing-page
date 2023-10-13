import { useTranslation } from 'react-i18next';
import styles from './Card.module.scss';

const Card = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={item.img} alt={item.desc} />
      </div>
      <p className={styles.desc}>{t(`important.text-${item.id}`)}</p>
    </div>
  );
};
export default Card;
