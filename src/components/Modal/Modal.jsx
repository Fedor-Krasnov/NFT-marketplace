import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import { Icon, IconCode } from '../units/Icon';

const Modal = ({ children, setIsModalOpen }) => {
  console.log('');

  return createPortal(
    <div className="modal">
      <div className="modal__close">
        <span onClick={() => setIsModalOpen(false)}>
          <Icon code={IconCode.close} />
        </span>
      </div>
      {children}
    </div>,
    document.body,
  );
};

export { Modal };
