import React, { useContext } from 'react';
import Charts from './Charts';
import TicketLists from './TicketLists';
import NewTicketModal from './NewTicketModal';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../Context';


export default function TicketPanel() {
  const { ticketModalShow, setTicketModalShow } = useContext(AppContext);
  // const [ ticketModalShow, setTicketModalShow ] = React.useState(false);

  let data = [
    {low: 'general', count: 7},
    {low: 'task', count: 4},
    {low: 'bugs', count: 2},
    {low: 'implementation', count: 2},
    {low: 'chores', count: 7},

    {low: 'low', count: 4},
    {normal: 'normal', count: 2},
    {important: 'important', count: 2},
    {critical: 'critical', count: 1},

    {progress: 'progress', count: 1},
    {review: 'review', count: 3},
    {complete: 'complete', count: 7}
  ];


  return (
    <div>
      <Charts
        data={data}
      />
      <Button className="button12" variant="danger" onClick={() => setTicketModalShow(true)}>New Ticket</Button>
      <NewTicketModal
            show={ticketModalShow}
            setTicketModalShow={setTicketModalShow}
            onHide={() => setTicketModalShow(false)}
          />
      <TicketLists className="ticketList" />
    </div>
  )
}
