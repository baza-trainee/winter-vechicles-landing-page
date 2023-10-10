import styles from './Modal.module.scss';
import close from "../../images/modal/close.svg";
import facebook from "../../images/modal/fb.svg";
import gmail from "../../images/modal/gmail.svg";
import share from "../../images/modal/share.svg";
import telegram from "../../images/modal/tg.svg";
import viber from "../../images/modal/viber.svg";


const Modal = () => {
    return <>
        <div className={styles.popup}>
            <div className={styles.popupBody}>
                <div className={styles.popupContent}>
                <img className={styles.popupClose} src={close} alt="close" />
                    <h3 className={styles.popupTitle}>Поділіться сайтом з друзями!</h3>
                    <hr className={styles.popupLine} />
                    <p className={styles.popupText}>Надішліть посилання на сайт <br />через cоціальні мережі</p>
                    <div className={styles.popupSocial}>
                        <a href="#" className={styles.popupSocialLink}><img src={facebook} alt="facebook" /></a>
                        <a href="#" className={styles.popupSocialLink}><img src={telegram} alt="telegram"/></a>
                        <a href="#" className={styles.popupSocialLink}><img src={viber} alt="viber"/></a>
                        <a href="#" className={styles.popupSocialLink}><img src={gmail} alt="gmail"/></a>
                    </div>
                    <p className={styles.popupText}>або скопіюйте лінк</p>
                    <button onclick="myFunction()" className={styles.popupCopyText}>Скопіювати посилання 
                        <img src={share} alt="share" />
                    </button >
                </div>
            </div>
        </div>
    </>
};

export default Modal;