import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ModalWindow = ({ image, show, handleClose }: IPropsModal) => (
  <Modal show={show} onHide={handleClose} centered size="xl">
    <img src={image} alt="bigPicture" />
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);
