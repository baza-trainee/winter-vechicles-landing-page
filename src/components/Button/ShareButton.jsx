import Button from "./ButtonModel/Button";
import Modal from "../Modal/Modal";
import { GoShareAndroid } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const ShareButton = () => {
  const { t } = useTranslation();
  const {setIsOpen} = useContext(ModalContext);

  const openModal = () => setIsOpen(true);
  
  return (
    <div>
      <Button
        onClick={() => openModal()}
        text={t("strength.btn")}
        icon={ <GoShareAndroid style={{fontSize:"1.5em"}}/>}
      />
      <Modal />
    </div>
  );
};

export default ShareButton;