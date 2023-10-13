import * as React from "react";
import Button from "./ButtonModel/Button";
import Modal from "../Modal/Modal";
import { GoShareAndroid } from "react-icons/go";
import style from "./ButtonModel/Button.module.scss";
import { useTranslation } from "react-i18next";

const ShareButton = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        text={t("strength.btn")}
        icon={<GoShareAndroid />}
      />
      {isOpen && <Modal />}
    </div>
  );
};

export default ShareButton;
