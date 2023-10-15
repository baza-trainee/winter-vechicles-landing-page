import Button from "./ButtonModel/Button";
import { useTranslation } from "react-i18next";


const HelpButton = () => {
  const { t } = useTranslation();
  return (
    <>
      <a
        href="https://www.monobank.com.ua/" /*!!Замінити лінк*/
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text={t("hero.btn")} />
      </a>
    </>
  );
};

export default HelpButton;
