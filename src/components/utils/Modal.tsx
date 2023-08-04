import React, { useState } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { ModalProvider } from 'styled-react-modal';

import ModalBackground from '../../styles/modal/ModalBackground';
import StyledModal from '../../styles/modal/StyledModal';

interface Props {
  onCloseFunction?: () => void;
  activateButtonElement: React.ReactNode;
  body: React.ReactNode;
  header?: React.ReactNode;
}

const Modal = ({
  activateButtonElement,
  body,
  onCloseFunction,
  header
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () => {
    onCloseFunction && onCloseFunction();
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  };

  return (
    <div>
      <ModalProvider backgroundComponent={ModalBackground}>
        <div role="button" onClick={toggleModal}>
          {activateButtonElement}
        </div>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          backgroundProps={{ opacity }}
        >
          {' '}
          <div className="d-flex justify-content-between align-items-center px-2 py-1 border-bottom">
            {header}
            <AiFillCloseCircle onClick={toggleModal} size={30} role="button" />
          </div>
          {body}
        </StyledModal>
      </ModalProvider>
    </div>
  );
};

export default Modal;
