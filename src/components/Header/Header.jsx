import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { FiMenu } from 'react-icons/fi';

import Container from '../Container/Container';
import LogoComponent from './LogoComponent/LogoComponent';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import MobileMenu from './MobileMenu/MobileMenu';

import styles from './header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const onOpenMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.containerHeader}>
          <LogoComponent />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  to="goal"
                  smooth={true}
                  duration={500}
                  aria-label="Move to Goal section"
                >
                  {t('header.goal')}
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  to="about"
                  smooth={true}
                  duration={500}
                  aria-label="Move to About section"
                >
                  {t('header.about')}
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  to="important"
                  smooth={true}
                  duration={500}
                  aria-label="Move to Why it`s important section"
                >
                  {t('header.important')}
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={styles.link}
                  to="fundraising"
                  smooth={true}
                  duration={500}
                  aria-label="Move to Fundraising section"
                >
                  {t('header.fundraising')}
                </Link>
              </li>
            </ul>
          </nav>
          <LangSwitcher />
          <button
            type="button"
            className={styles.burgerMenuOpen}
            onClick={() => onOpenMobileMenu()}
          >
            <FiMenu />
          </button>
        </div>
        <MobileMenu
          setIsOpenMobileMenu={setIsOpenMobileMenu}
          isOpenMobileMenu={isOpenMobileMenu}
        />
      </Container>
    </header>
  );
};

export default Header;
