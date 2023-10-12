import * as React from "react";
import Button from "./ButtonModel/Button";
import Modal from "../Modal/Modal";
import { GoShareAndroid } from "react-icons/go";
import style from "./ButtonModel/Button.module.scss";

const ShareButton = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <Button
        className={style.button__center}
        onClick={handleClick}
        text="Поділитися"
        icon={<GoShareAndroid />}
      />
      {isOpen && <Modal />}
    </div>
  );
};

export default ShareButton;
