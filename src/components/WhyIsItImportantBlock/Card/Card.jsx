import styles from './Card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={`${styles.card} ${item.id === 1 ? styles.row : ''}`}>
      <div>
        <img
          className={styles.image}
          src={`src/components/WhyIsItImportantBlock/images/${item.img}.png`}
          alt=""
        />
      </div>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
};
export default Card;
