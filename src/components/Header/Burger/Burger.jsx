import React, { useState } from 'react';
import './Burger.scss';
import { Modal } from '../../Modal';
import { Button, IconCode } from '../../units';
import { HeaderMenu } from '../HeaderMenu';

const Burger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="burger">
      <div className="burger__container" onClick={() => setIsModalOpen(!isModalOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <HeaderMenu isModal />
          <Button icon={IconCode.user} title="Sign Up" to="/pages/create-account.html" />
        </Modal>
      )}
    </div>
  );
};

export { Burger };
