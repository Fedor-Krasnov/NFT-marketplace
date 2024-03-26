import React, { useState } from 'react';
import { Modal } from '../../Modal';
import { ModalHeaderMenu } from '../../Modal/ModalHeaderMenu';
import burgerStyles from './Burger.module.scss';

const burgerClassName = 'burger';

const Burger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={burgerStyles[burgerClassName]}>
      <div className={burgerStyles[`${burgerClassName}__container`]} onClick={() => setIsModalOpen(!isModalOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalHeaderMenu />
      </Modal>
    </div>
  );
};

export { Burger };
