
import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function ({ isOpen, onAccept, onClose, text }) {
  return (
    <Modal
      isOpen={isOpen}
    >
      <p>
        {text}
      </p>
      <button onClick={onAccept}>
        aceptar
      </button>
      <button onClick={onClose}>
        cancelar
      </button>
    </Modal>
  );
}
