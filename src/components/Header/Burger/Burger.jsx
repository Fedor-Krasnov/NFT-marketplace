import React, { useState } from 'react';
import './Burger.scss';
import { Modal } from '../../Modal';
import { ModalHeaderMenu } from '../../Modal/ModalHeaderMenu';

const Burger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="burger">
      <div className="burger__container" onClick={() => setIsModalOpen(!isModalOpen)}>
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
