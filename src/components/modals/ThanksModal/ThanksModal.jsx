import styles from "./ThanksModal.module.scss";

const ThanksModal = () => {
    return (
        <div className={styles.popupContent}>
            <p className={styles.popupText}>Дякуємо за вашу підтримку!</p>
        </div>
    );
}
 
export default ThanksModal;