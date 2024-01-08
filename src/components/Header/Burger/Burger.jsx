import React, { useState } from 'react';
import './Burger.scss';
import { Modal } from '../../Modal';
import { ModalHeaderMenu } from '../../Modal/ModalHeaderMenu';

const burgerClassName = 'burger';

const Burger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={burgerClassName}>
      <div className={`${burgerClassName}__container`} onClick={() => setIsModalOpen(!isModalOpen)}>
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
