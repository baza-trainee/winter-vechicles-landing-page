import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './LangSwitcher.module.scss';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isOpenChangeLangWrapper, setIsOpenLangSwitcher] = useState(false);

  const languages = [
    { code: 'en', label: 'en' },
    { code: 'pl', label: 'pl' },
    { code: 'ua', label: 'ua' },
  ];

  const onLangWrapperClick = () =>
    setIsOpenLangSwitcher(!isOpenChangeLangWrapper);

  const handleChangeLanguage = languageCode => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    setIsOpenLangSwitcher(!isOpenChangeLangWrapper);
  };

  const availableLanguages = languages.filter(
    language => language.code !== selectedLanguage
  );

  return (
    <div className={styles.langWrapper}>
      <div
        tabIndex={0}
        className={styles.selectedLanguage}
        onClick={() => onLangWrapperClick()}
      >
        <div className={styles.currentLang}>{t(`${selectedLanguage}`)}</div>
        <div
          className={`${styles.imgThumb} ${
            isOpenChangeLangWrapper && styles.imgThumbRotate
          }`}
        >
          <IoIosArrowDown />
        </div>
      </div>
      {isOpenChangeLangWrapper && (
        <div className={styles.changeLangWrapper}>
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
  );
};

export default LangSwitcher;
