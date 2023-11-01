import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Modal from '../modals/Modal/Modal';
import ThanksModal from '../modals/ThanksModal/ThanksModal';
import style from './Button.module.scss';

const Button = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if(isOpen) {
      document.body.classList.remove('modal-open');
    } else {
      document.body.classList.add('modal-open');
    }

    setIsOpen(!isOpen);
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

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    share: PropTypes.bool,
}

export default Button;
