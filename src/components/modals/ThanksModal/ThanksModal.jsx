import { useTranslation } from 'react-i18next';
import styles from './ThanksModal.module.scss';

const ThanksModal = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.popupContent}>
      <p className={styles.popupText}>{t('modal.gratitude')}</p>
    </div>
  );
};

export default ThanksModal;
