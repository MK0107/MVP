import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context';
import TicketPanel from '../tickets/index';
import { Card, Button, Modal, Container } from 'react-bootstrap';

export default function ProjectInfo() {
  const { currentProject, info } = useContext(AppContext);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  if (!currentProject.title) {
    return (
      <Card border="dark" bg="warning" className="text-center">
        <Card.Header>Hello, {info.name}</Card.Header>
        <Card.Body>
          <Card.Title>What's on your mind?</Card.Title>
          <Card.Text>{currentProject.members}</Card.Text>
          <Card.Text>{currentProject.description}</Card.Text>
          {/* <Button variant="danger">Look</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    )
  }

  return (
    <div>
      <Card border="dark" bg="warning" className="text-center">
        <Card.Header>{currentProject.title}</Card.Header>
        <Card.Body>
          <Card.Title>{currentProject.author}</Card.Title>
          <Card.Text>{currentProject.members}</Card.Text>
          <Card.Text>{currentProject.description}</Card.Text>
          <>
            {values.map((v, idx) => (
              <Button key={idx} variant="danger" className="me-2" onClick={() => handleShow(v)}>
                Look
                {typeof v === 'string' && `below ${v.split('-')[0]}`}
              </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <div className="haha">
                <Modal.Header closeButton>
                  <Modal.Title>{currentProject.title}</Modal.Title>
                </Modal.Header>
                <TicketPanel />
              </div>
            </Modal>
          </>
        </Card.Body>
        <Card.Footer className="text-muted">{String(currentProject.time).slice(0,10).split('-').join('/')}</Card.Footer>
      </Card>
    </div>
  )
}
