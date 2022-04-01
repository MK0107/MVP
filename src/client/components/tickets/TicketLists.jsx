import React, { useContext } from 'react'
import { AppContext } from '../../Context';
import { Table } from 'react-bootstrap';
import ModifyTicket from './ModifyTicket';

export default function TicketLists() {
  const { currentTickets, modifyTicket, setModifyTicket } = useContext(AppContext);
  const [modalShow, setModalShow] = React.useState(false);
  let tickets = currentTickets.data;

  if (!Array.isArray(tickets)) {
    return null;
  }

  function setTwo(ticket) {
    setModifyTicket({
      title: ticket.title,
      author: ticket.author,
      type: ticket.type,
      priority: ticket.priority,
      members: ticket.members,
      description: ticket.description,
      duration: ticket.duration,
      time: ticket.time,
      id: ticket.id
    });
    setModalShow(true);
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Project</th>
          <th>Author</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Members</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr onClick={()=> setTwo(ticket)}>
            <td key={Math.random()} >
              {ticket.id}
            </td>
            <td key={Math.random()} >
              {ticket.title}
            </td>
            <td key={Math.random()} >
              {ticket.author}
            </td>
            <td key={Math.random()} >
              {ticket.type}
            </td>
            <td key={Math.random()} >
              {ticket.priority}
            </td>
            <td key={Math.random()} >
              {ticket.members}
            </td>
            <td key={Math.random()} >
              {ticket.description}
            </td>
            <td key={Math.random()} >
              {ticket.duration}
            </td>
            <td key={Math.random()} >
              {ticket.time.slice(5,10).split('-').join('/')}
            </td>
          </tr>
        ))}
      </tbody>
      <div>
        <ModifyTicket
          show={modalShow}
          setModalShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </Table>
  )
}
