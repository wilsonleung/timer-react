import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

export interface ModalProps {
  show: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClick, children }) => {
  if (!show) {
    return null;
  }
  const clickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (onClick) {
      onClick(event);
    }
  };

  return ReactDOM.createPortal(
    <div className={style['modal']} onClick={clickHandler}>
      {children}
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;
