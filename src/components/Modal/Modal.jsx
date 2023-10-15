import styles from './Modal.module.scss';
import facebook from "../../images/modal/fb.svg";
import telegram from "../../images/modal/tg.svg";
import instagram from "../../images/modal/instagram.svg";
import linkedin from "../../images/modal/linkedin.svg";
import { FaCheck } from "react-icons/fa6"
import { GoShareAndroid } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../../contexts/ModalContext';

const Modal = () => {
    const {isOpen, setIsOpen} = useContext(ModalContext);
    const [isCopied, setIsCopied] = useState(false); // for future copied status
    // const currentUrl = window.location.href; //original URL
    const currentUrl = 'https://baza-trainee.tech/'; //

    const copyToClipboard = () => {
        if (isCopied) return;
    
        navigator.clipboard.writeText(currentUrl).then(() => {
          setIsCopied(true);
    
          setTimeout(() => {
            setIsOpen(false);
            setIsCopied(false);
          }, 2500);

    
        }).catch(err => {
          console.error(`Failed to copy: ${err}`);
        });
    }

    const handleModal = (e) => {
        if (!e.target.closest(`.${styles.popupClose}`) && e.target.className !== styles.popup) return;
        
        setIsOpen(false);
    };
    
    return (
        isOpen && createPortal(
                <div className={styles.popup} onClick={handleModal}>
                    <div className={styles.popupContent}>
                            <AiOutlineClose className={styles.popupClose}/>
                        <h3 className={styles.popupTitle}>Поділіться сайтом з друзями!</h3>
                        <p className={styles.popupText}>Надішліть посилання на сайт <br />через cоціальні мережі</p>
                        <div className={styles.popupSocial}>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} className={styles.popupSocialLink}>
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`} className={styles.popupSocialLink}>
                                <img src={telegram} alt="telegram"/>
                            </a>
                            <a href="#" className={styles.popupSocialLink}> 
                                {/* need to solve */}
                                <img src={instagram} alt="instagram"/>
                            </a>
                            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} className={styles.popupSocialLink}><img src={linkedin} alt="linkedin"/></a>
                        </div>
                        <p className={styles.popupText}>або скопіюйте лінк</p>
                        <div className={styles.popupCopy}>
                            <button className={styles.popupCopyText} onClick={copyToClipboard}>
                                Скопіювати посилання 
                                <GoShareAndroid size="24"/>
                            </button >
                            {isCopied && (
                                <p className={`${styles.popupText} ${styles.popupCopied}`}>
                                    Посилання скопійовано
                                    <FaCheck style={{color: "#25B946"}} size="24"/>
                                </p>
                            )}
                        </div>
                    </div>
                </div>,
            document.body
        )
    );
};

export default Modal;
