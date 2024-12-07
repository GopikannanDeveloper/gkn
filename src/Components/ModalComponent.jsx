import React from "react";
import { Modal } from "react-bootstrap";

const ModalComponent = ({ show, title, body, onClose, size, classname }) => {
  return (
    <Modal show={show} onHide={onClose} size={size} backdrop="static" centered>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
