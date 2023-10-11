import styles from './Modal.module.scss';
import facebook from "../../images/modal/fb.svg";
import telegram from "../../images/modal/tg.svg";
import instagram from "../../images/modal/instagram.svg";
import linkedin from "../../images/modal/linkedin.svg";
import { GoShareAndroid } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";


const Modal = () => {
    return <>
        <div className={styles.popup}>
            <div className={styles.popupBody}>
                <div className={styles.popupContent}>
                        <AiOutlineClose className={styles.popupClose} />
                    <h3 className={styles.popupTitle}>Поділіться сайтом з друзями!</h3>
                    <hr className={styles.popupLine} />
                    <p className={styles.popupText}>Надішліть посилання на сайт <br />через cоціальні мережі</p>
                    <div className={styles.popupSocial}>
                        <a href="#" className={styles.popupSocialLink}><img src={facebook} alt="facebook" /></a>
                        <a href="#" className={styles.popupSocialLink}><img src={telegram} alt="telegram"/></a>
                        <a href="#" className={styles.popupSocialLink}><img src={instagram} alt="instagram"/></a>
                        <a href="#" className={styles.popupSocialLink}><img src={linkedin} alt="linkedin"/></a>
                    </div>
                    <p className={styles.popupText}>або скопіюйте лінк</p>
                    <button onClick={"myFunction()"} className={styles.popupCopyText}>Скопіювати посилання 
                    <GoShareAndroid size="24"/>
                    </button >
                </div>
            </div>
        </div>
    </>
};

export default Modal;



