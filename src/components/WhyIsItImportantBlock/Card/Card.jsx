import styles from './Card.module.scss';

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.image}
          src={`src/images/${item.img}.png`}
          alt={item.desc}
        />
      </div>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
};
export default Card;
