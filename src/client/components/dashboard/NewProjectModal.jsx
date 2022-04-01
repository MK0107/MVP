import React, { useContext } from 'react'
import { AppContext } from '../../Context';
import { Modal, Button, Form } from 'react-bootstrap';

export default function NewProjectModal(props) {
  // const titleRef = React.useRef();
  // const membersRef = React.useRef();
  // const descriptionRef = React.useRef();

  const { titleRef, membersRef, descriptionRef, addProject } = useContext(AppContext);

  // const addProject = (e) => {
  //   // e.preventDefault();
  //   let newProjectText = {
  //     author: info.name,
  //     title: titleRef.current.value,
  //     members: membersRef.current.value,
  //     description: descriptionRef.current.value
  //   }
  //   axios.post('/projects', newProjectText);
  //   setModalShow(false);
  // }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Project
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
      </>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="danger" type="submit" onClick={addProject}>Submit</Button>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
