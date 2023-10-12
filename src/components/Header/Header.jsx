import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// import { Link } from 'react-router-dom';
// import { Link as ScrollLink} from 'react-scroll';

import Container from '../Container/Container';
import LogoComponent from './LogoComponent/LogoComponent';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import BurgerSvg from './BurgerSvg/BurgerSvg';
import MobileMenu from './MobileMenu/MobileMenu';

import styles from './header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenu, setMobileMenu] = useState(false);

  const onOpenMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.containerHeader}>
          <LogoComponent />
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="/"
                  aria-label="Move to Goal section"
                >
                  {t('header.goal')}
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="/#about"
                  aria-label="Move to About section"
                >
                  {t('header.about')}
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="/#important"
                  aria-label="Move to Why it`s important section"
                >
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

                {/* <ScrollLink
                  className={styles.link}
                  smooth={true}
                  duration={250}
                  to="fundraising"
                  aria-label="Move to Fundraising section"
                >
                  {t('header.fundraising')}
                </ScrollLink> */}
              </li>
            </ul>
          </nav>
          <LangSwitcher />
          <button
            type="button"
            className={styles.burgerMenuOpen}
            onClick={() => onOpenMobileMenu()}
          >
            <BurgerSvg />
          </button>
        </div>
        <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </Container>
    </header>
  );
};

export default Header;
