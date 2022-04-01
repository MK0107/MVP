import React from 'react';
import SignUp from './SignUp';
import { Modal, Button } from 'react-bootstrap';

export default function SignUpModal(props) {
  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Hey, what's up?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUp />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
