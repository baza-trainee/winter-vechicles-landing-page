import Button from "./ButtonModel/Button";
import { useTranslation } from "react-i18next";

const HelpButton = () => {
  const { t } = useTranslation();
  return (
    <div>
      <a
        href="https://www.monobank.com.ua/" /*!!Замінити лінк*/
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text={t("hero.btn")} />
      </a>
    </div>
  );
};

export default HelpButton;
