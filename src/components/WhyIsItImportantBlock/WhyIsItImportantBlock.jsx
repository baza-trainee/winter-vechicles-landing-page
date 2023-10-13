import { useTranslation } from 'react-i18next';
import Card from './Card/Card';
import Container from '../Container/Container';
import { data } from './data';
import styles from './WhyIsItImportantBlock.module.scss';


const WhyIsItImportantBlock = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>{t('important.title')}</h2>
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
      </Container>
    </section>
  );
};
export default WhyIsItImportantBlock;
