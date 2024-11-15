import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import modalStyles from './Modal.module.scss';
import { Icon, IconCode } from '../units/Icon';
import { useWindowDimensions } from '../../hooks';
import { CSSTransition } from 'react-transition-group';
import { Logo } from '../units';

const modalClassName = 'modal';

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
  const { windowWidth } = useWindowDimensions();
  const maxModalWidth = 945;
  const logoDisplayWidth = 525;

  useEffect(() => {
    if (windowWidth > maxModalWidth) {
      setIsModalOpen(false);
    }
  }, [windowWidth]);

  return createPortal(
    <CSSTransition
      classNames={{
        enter: modalStyles[`${modalClassName}_enter`],
        enterDone: modalStyles[`${modalClassName}_enter`],
        exit: modalStyles[`${modalClassName}_exit`],
        exitDone: modalStyles[`${modalClassName}_exit`],
      }}
      in={isModalOpen}
      timeout={1000}
      unmountOnExit
    >
      <div className={modalStyles[modalClassName]}>
        <div>
          <div className={modalStyles[`${modalClassName}__header`]}>
            {logoDisplayWidth >= windowWidth && <Logo setIsModalMenuOpen={setIsModalOpen} />}
            <div className={modalStyles[`${modalClassName}__close`]}>
              <span onClick={() => setIsModalOpen(false)}>
                <Icon code={IconCode.close} />
              </span>
            </div>
          </div>
          {children}
        </div>
        <div className={modalStyles[`${modalClassName}__copyright`]}>Ⓒ Nexus. All rights reserved.</div>
      </div>
    </CSSTransition>,
    document.body,
  );
};

export { Modal };
