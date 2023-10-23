import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa6';
import { GoShareAndroid } from 'react-icons/go';
import facebook from '../../../images/modal/fb.svg';
import telegram from '../../../images/modal/tg.svg';
import linkedin from '../../../images/modal/linkedin.svg';
import whatsApp from '../../../images/modal/whatsApp.svg';
import styles from './Modal.module.scss';

const Modal = ({ onClose }) => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const currentUrl = window.location.href; 

  const copyToClipboard = () => {
    if (isCopied) return;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setIsCopied(true);

        setTimeout(() => {
          onClose();
          setIsCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.error(`Failed to copy: ${err}`);
      });
  };

  return (
    <div className={styles.popupContent}>
      <h3 className={styles.popupTitle}>{t('modal.title')}</h3>
      <div className={styles.popupInfo}>
        <p className={styles.popupText}>{t('modal.text-send')}</p>
        <div className={styles.popupSocial}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            className={styles.popupSocialLink}
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(
              currentUrl
            )}`}
            className={styles.popupSocialLink}
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`}
            className={styles.popupSocialLink}
          >
            <img src={whatsApp} alt="whatsApp" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              currentUrl
            )}`}
            className={styles.popupSocialLink}
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <p className={styles.popupText}>{t('modal.text-copy')}</p>
        <button className={styles.popupCopyText} onClick={copyToClipboard}>
          {t('modal.btnCopy')}
          <GoShareAndroid size="24" />
        </button>
        {isCopied && (
          <p className={`${styles.popupText} ${styles.popupCopied}`}>
            {t('modal.copied')}
            <FaCheck style={{ color: '#25B946' }} size="24" />
          </p>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
