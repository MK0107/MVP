import React, { useContext } from 'react'
import { AppContext } from '../../Context';
import { Modal, Button, Form } from 'react-bootstrap';

export default function NewTicketModal(props) {
  // const titleRef = React.useRef();
  // const membersRef = React.useRef();
  // const descriptionRef = React.useRef();
  // const typeRef = React.useRef();
  // const priorityRef = React.useRef();
  // const durationRef = React.useRef();

  const { addTicket, ticketTitleRef, ticketTypeRef, ticketPriorityRef, ticketMembersRef, ticketDescriptionRef, ticketDurationRef } = useContext(AppContext);

  // const { info, setModalShow } = useContext(AppContext);

  // const addTicket = (e) => {
  //   e.preventDefault();
  //   let newTicketText = {
  //     author: info.name,
  //     title: titleRef.current.value,
  //     type: typeRef.current.value,
  //     priority: priorityRef.current.value,
  //     members: membersRef.current.value,
  //     description: descriptionRef.current.value,
  //     duration: durationRef.current.value,
  //   }
  //   axios.post('/tickets', newTicketText);
  //   setModalShow(false);
  // }

  return (
    <Modal
      {...props}
      size="xlg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={ticketTitleRef}
            id="formTitle"
            type="text"
          />
          <label htmlFor="formTitle">Title</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Select
            onChange={ticketTypeRef}
            ref={ticketTypeRef}
            id="formType"
            type="text"
          >
            <option>Select</option>
            <option value="progress">Progress</option>
            <option value="review">Review</option>
            <option value="complete">Complete</option>
          </Form.Select>
          <label htmlFor="formType">Type</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Select
            onChange={ticketPriorityRef}
            ref={ticketPriorityRef}
            id="formPriority"
            type="text"
          >
            <option>Select</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="important">Important</option>
            <option value="critical">Critical</option>
            </Form.Select>
          <label htmlFor="formPriority">Priority</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={ticketMembersRef}
            id="formMembers"
            type="text"
          />
          <label htmlFor="formMembers">Members</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={ticketDescriptionRef}
            id="formDescription"
            type="text"
          />
          <label htmlFor="formDescription">Description</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            ref={ticketDurationRef}
            id="formDuration"
            type="text"
          />
          <label htmlFor="formDuration">Duration</label>
        </Form.Floating>
      </>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="danger" type="submit" onClick={addTicket}>Submit</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
