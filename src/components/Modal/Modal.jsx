import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import { Icon, IconCode } from '../units/Icon';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.js';

const Modal = ({ children, setIsModalOpen }) => {
  const { windowWidth } = useWindowDimensions();
  const maxModalWidth = 945;

  useEffect(() => {
    if (windowWidth > maxModalWidth) {
      setIsModalOpen(false);
    }
  }, [windowWidth]);

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
