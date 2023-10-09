import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/header/logo-desktop.svg';
import arrowDown from '../../assets/header/arrow-lang.svg';

import styles from './header.module.scss';
import Container from '../Container/Container';

const Header = () => {
  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  console.log(selectedLanguage);
  const [isOpenChangeLangWrapper, setisOpenChangeLangWrapper] = useState(false);

  const languages = [
    { code: 'en', label: 'en' },
    { code: 'ua', label: 'ua' },
    { code: 'pl', label: 'pl' },
  ];

  const onLangWrapperClick = () =>
    setisOpenChangeLangWrapper(!isOpenChangeLangWrapper);

  const handleChangeLanguage = languageCode => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    setisOpenChangeLangWrapper(!isOpenChangeLangWrapper);
  };

  const availableLanguages = languages.filter(
    language => language.code !== selectedLanguage
  );

  //   const onCurrentLangClick = () =>
  //     setisOpenChangeLangWrapper(!isOpenChangeLangWrapper);

  //   const onChangeLang = () => {
  //     if (currentLang === "ukr") {
  //       setCurrentLang("eng" || "pln");
  //     } else if (currentLang === "eng") {
  //       setCurrentLang("ukr" || "pln");
  //     } else {
  //       setCurrentLang("eng" || "pln");
  //     }
  //     setisOpenChangeLangWrapper(false);
  //   };

  //   const onChangeLang = e => {
  //     console.dir(e);
  //     if (e.target.texcontent === 'ukr') {
  //       setCurrentLang('ukr');
  //     } else if (e.target.texcontent === 'eng') {
  //       setCurrentLang('eng');
  //     } else {
  //       setCurrentLang('pln');
  //     }
  //     setisOpenChangeLangWrapper(false);
  //   };

  //   useEffect(() => {
  //     const closeLangWrapper = () => {
  //       setisOpenChangeLangWrapper(true);
  //     };
  //     if (isOpenChangeLangWrapper) {
  //       document.addEventListener("click", closeLangWrapper);
  //     }

  //     return () => {
  //       document.removeEventListener("click", closeLangWrapper);
  //     };
  //   }, [isOpenChangeLangWrapper]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.containerHeader}>
          {/* бургер меню */}
          {/* <button style={{ width: 40, height: 40 }}>x</button> */}
          <nav className={styles.nav}>
            <a href="/">
              <img className={styles.logo} src={logo} alt="logo" />
            </a>

            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  {t('header.goal')}
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  {t('header.about')}
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  {t('header.important')}
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  {t('header.count')}
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.langWrapper}>
            <div
              className={styles.selectedLanguage}
              // onClick={() => handleChangeLanguage(availableLanguages[0].label)}
              onClick={() => onLangWrapperClick()}
            >
              <span className={styles.currentLang}>
                {t(`${selectedLanguage}`)}
              </span>
              <div
                className={`${styles.imgThumb} ${
                  isOpenChangeLangWrapper ? styles.imgThumbRotate : ''
                }`}
              >
                <img src={arrowDown} alt="arrow down" width={12} height={6} />
              </div>
            </div>
            {isOpenChangeLangWrapper && (
              <div className={styles.changeLangWrapper}>
                {/* <a href="#" onClick={() => onChangeLang()}>
                  <span className={styles.changLang}>
                    eng */}
                {/* ЧЕРЕЗ ФИЛЬТР МАССИВ */}
                {/* {currentLang === "ukr" ? "eng" || "pln" : "ukr"} */}
                {/* </span>
                </a> */}

                {availableLanguages.map(language => (
                  <a
                    className={styles.changLang}
                    href="#"
                    key={language.code}
                    onClick={() => handleChangeLanguage(language.code)}
                  >
                    {t(`${language.label}`)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

{
  /* <div>
  <div className="language-dropdown">
    <div
      className="selected-language"
      onClick={() => handleChangeLanguage(availableLanguages[0].code)}
    >
      {t(`language.${selectedLanguage}`)}
    </div>
    <div className="language-menu">
      {availableLanguages.map(language => (
        <div
          key={language.code}
          onClick={() => handleChangeLanguage(language.code)}
        >
          {t(`language.${language.code}`)}
        </div>
      ))}
    </div>
  </div>
  <h1>{t('title')}</h1>
  <p>{t('content')}</p>
</div>; */
}

export default Header;
