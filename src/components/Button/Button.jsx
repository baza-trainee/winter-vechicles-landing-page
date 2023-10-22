import { useState } from 'react';
import { createPortal } from 'react-dom';
import Overlay from '../Overlay/Overlay';
import Modal from '../modals/Modal/Modal';
import ThanksModal from '../modals/ThanksModal/ThanksModal';
import style from './Button.module.scss';

const Button = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('modal-open');
  };

  return (
    <>
      <button
        type={props.type || 'button'}
        className={`${style.button} ${props.className}`}
        onClick={handleOpenModal}
        disabled={props.disabled}
      >
        <span className={style.buttonContent}>
          {props.text}
          {props.icon}
        </span>
      </button>

      {isOpen &&
        createPortal(
          <Overlay onClose={handleOpenModal} share={props.share}>
            {props.share ? (
              <Modal onClose={handleOpenModal} />
            ) : (
              <ThanksModal />
            )}
          </Overlay>,
          document.body
        )}
    </>
  );
};

export default Button;
