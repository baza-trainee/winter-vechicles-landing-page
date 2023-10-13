
import styles from './Modal.module.scss';
import facebook from "../../images/modal/fb.svg";
import telegram from "../../images/modal/tg.svg";
import instagram from "../../images/modal/instagram.svg";
import linkedin from "../../images/modal/linkedin.svg";
import { GoShareAndroid } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { createPortal } from 'react-dom';


const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false); // for future copied status
    // const currentUrl = window.location.href; //original URL
    const currentUrl = 'https://baza-trainee.tech/';

    const copyToClipboard = () => {
        if (isCopied) return;
    
        navigator.clipboard.writeText(currentUrl).then(() => {
          setIsCopied(true);
    
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);

          setIsOpen(isOpen => !isOpen)
    
        }).catch(err => {
          console.error(`Failed to copy: ${err}`);
        });
    }

    const handleModal = (e) => {
        if (!e.target.closest('svg') && e.target.className !== styles.popupBody) return;
        
        setIsOpen(isOpen => !isOpen);
    };
    
    return (
        isOpen && createPortal(
            <div className={styles.popup} >
                <div className={styles.popupBody} onClick={handleModal}>
                    <div className={styles.popupContent}>
                            <AiOutlineClose className={styles.popupClose}/>
                        <h3 className={styles.popupTitle}>Поділіться сайтом з друзями!</h3>
                        <hr className={styles.popupLine} />
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
                        <button className={styles.popupCopyText} onClick={copyToClipboard}>
                            Скопіювати посилання 
                            <GoShareAndroid size="24"/>
                        </button >
                    </div>
                </div>
            </div>,
            document.body
        )
    );
};

export default Modal;