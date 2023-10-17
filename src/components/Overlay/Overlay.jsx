
import { AiOutlineClose } from 'react-icons/ai';
import styles from "./Overlay.module.scss";

const Overlay = ({ children, onClose }) => {

    const handleModal = e => {
        if (
            !e.target.closest(`.${styles.popupClose}`) &&
            e.target.className !== styles.overlay
        ) return;

        onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleModal}>
            <div className={styles.popupBody}>
                <AiOutlineClose className={styles.popupClose} />
                {children}
            </div>
        </div>
    );
}
 
export default Overlay;