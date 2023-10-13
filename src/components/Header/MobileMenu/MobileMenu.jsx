import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';

import Container from '../../Container/Container';

import styles from './mobileMenu.module.scss';

const MobileMenu = ({ setMobileMenu, mobileMenu }) => {
  const { t } = useTranslation();
  const onCloseMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <div className={`${styles.mobileMenu} ${mobileMenu && styles.isOpen}`}>
      <Container>
        <div className={styles.mobileMenuContainer}>
          <button
            className={styles.mobileMenuCLoseBtn}
            type="button"
            onClick={() => onCloseMobileMenu()}
          >
            <AiOutlineClose className={styles.closeSvg} size={24} />
          </button>
        </div>
        <nav className={styles.navMobile} onClick={() => onCloseMobileMenu()}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                {t('header.goal')}
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/#about">
                {t('header.about')}
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/#important">
                {t('header.important')}
              </a>
            </li>
            <li className={styles.item}>
              <a
                className={styles.link}
                href="/#fundraising"
                aria-label="Move to Fundraising section"
              >
                {t('header.fundraising')}
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MobileMenu;
