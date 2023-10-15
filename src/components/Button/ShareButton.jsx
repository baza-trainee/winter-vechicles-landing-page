import * as React from "react";
import Button from "./ButtonModel/Button";
import Modal from "../Modal/Modal";
import { GoShareAndroid } from "react-icons/go";
import { useTranslation } from "react-i18next";

const ShareButton = () => {
  const { t } = useTranslation();
  const [modal, setModal] = React.useState(false);

  const Toggle = () => setModal(!modal);
 /*Переписати код на відкриття модального вікна у разі потреби*/
  return (
    <div>
      <Button
        onClick={() => Toggle()}
        text={t("strength.btn")}
        icon={ <GoShareAndroid style={{fontSize:"1.5em"}}/>}
      />
      <Modal show={modal} close={Toggle}/>
    </div>
  );
};

export default ShareButton;
