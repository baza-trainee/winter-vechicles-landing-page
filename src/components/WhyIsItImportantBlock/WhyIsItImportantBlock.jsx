import Card from './Card/Card';
import styles from './WhyIsItImportantBlock.module.scss';
import { data } from './data';

const WhyIsItImportantBlock = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Чому це важливо</p>
      <div className={styles.cards}>
        {!!data.length &&
          data.map(item => {
            return (
              <div key={item.id} className={styles.card}>
                <Card item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default WhyIsItImportantBlock;
