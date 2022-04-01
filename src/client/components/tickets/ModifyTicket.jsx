import React, { useContext } from 'react'
import axios from 'axios';
import { AppContext } from '../../Context';
import { Modal, Button, Form, Container } from 'react-bootstrap';

export default function ModifyTicket(props) {
  const titleRef = React.useRef();
  const membersRef = React.useRef();
  const descriptionRef = React.useRef();
  const typeRef = React.useRef();
  const priorityRef = React.useRef();
  const durationRef = React.useRef();

  const { info, modifyTicket } = useContext(AppContext)

  const changeTicket = (e) => {
    e.preventDefault();
    let newTicketText = {
      author: info.name,
      title: modifyTicket.title,
      type: modifyTicket.type,
      priority: modifyTicket.priority,
      members: modifyTicket.members,
      description: modifyTicket.description,
      duration: modifyTicket.duration,
      id: modifyTicket.id
    }
    axios.put('/tickets', newTicketText);
    props.setModalShow(false);
  }

  return (
    <Modal
      {...props}
      size="xlg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modify Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={titleRef}
            id="formTitle"
            type="text"
          />
          <label htmlFor="formTitle">Title</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={typeRef}
            id="formType"
            type="text"
          />
          <label htmlFor="formType">Type</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={priorityRef}
            id="formPriority"
            type="text"
          />
          <label htmlFor="formPriority">Priority</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={membersRef}
            id="formMembers"
            type="text"
          />
          <label htmlFor="formMembers">Members</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={descriptionRef}
            id="formDescription"
            type="text"
          />
          <label htmlFor="formDescription">Description</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={durationRef}
            id="formDuration"
            type="text"
          />
          <label htmlFor="formDuration">Duration</label>
        </Form.Floating>
      </>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="danger" type="submit" onClick={changeTicket}>Submit</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
