import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import { Icon, IconCode } from '../units/Icon';
import { useWindowDimensions } from '../../hooks';
import { CSSTransition } from 'react-transition-group';
import { Logo } from '../units/index.js';

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
  const { windowWidth } = useWindowDimensions();
  const maxModalWidth = 945;
  const logoDisplayWidth = 425;

  useEffect(() => {
    if (windowWidth > maxModalWidth) {
      setIsModalOpen(false);
    }
  }, [windowWidth]);

  return createPortal(
    <CSSTransition
      classNames={{
        enter: 'modal_enter',
        enterDone: 'modal_enter',
        exit: 'modal_exit',
        exitDone: 'modal_exit',
      }}
      in={isModalOpen}
      timeout={1000}
      unmountOnExit
    >
      <div className="modal">
        <div className="modal__header">
          {logoDisplayWidth >= windowWidth && <Logo withoutText />}
          <div className="modal__close">
            <span onClick={() => setIsModalOpen(false)}>
              <Icon code={IconCode.close} />
            </span>
          </div>
        </div>
        {children}
      </div>
    </CSSTransition>,
    document.body,
  );
};

export { Modal };
