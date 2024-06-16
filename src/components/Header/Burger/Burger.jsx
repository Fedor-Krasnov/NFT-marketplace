import React from 'react';
import { useModalMenuContext } from '../../../contexts';
import { Modal } from '../../Modal';
import { ModalHeaderMenu } from '../../Modal/ModalHeaderMenu';
import burgerStyles from './Burger.module.scss';

const burgerClassName = 'burger';

const Burger = () => {
  const { isModalMenuOpen, setIsModalMenuOpen } = useModalMenuContext();

  return (
    <div className={burgerStyles[burgerClassName]}>
      <div
        className={burgerStyles[`${burgerClassName}__container`]}
        onClick={() => setIsModalMenuOpen(!isModalMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Modal isModalOpen={isModalMenuOpen} setIsModalOpen={setIsModalMenuOpen}>
        <ModalHeaderMenu setIsModalMenuOpen={setIsModalMenuOpen} />
      </Modal>
    </div>
  );
};

export { Burger };
