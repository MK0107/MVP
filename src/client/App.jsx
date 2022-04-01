import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from './Context';
import { Container, Button } from 'react-bootstrap';
import SignIn from './components/logIn/signIn';
import SignUpModal from './components/logIn/SignUpModal';
import NavigationBar from './components/navbar/index';
import Dashboard from './components/dashboard';

export default function App() {
  const [currentProjects, setCurrentProjects] = useState([]);
  const [currentTickets, setCurrentTickets] = useState({});
  const [currentProject, setCurrentProject] = useState({});
  const [ modifyTicket, setModifyTicket ] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // Signed in user
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [create, setCreate] = useState({
    name: '',
    email: '',
    password: ''
  });

  // New project
  const titleRef = React.useRef();
  const membersRef = React.useRef();
  const descriptionRef = React.useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [modalShow, setModalShow] = React.useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addProject = (e) => {
    // e.preventDefault();
    let newProjectText = {
      author: info.name,
      title: titleRef.current.value,
      members: membersRef.current.value,
      description: descriptionRef.current.value
    }
    axios.post('/projects', newProjectText);
    setModalShow(false);
  }

  const getProjects = async () => {
    try {
  const userPostsProjects = await axios.get('/projects')
      setCurrentProjects(userPostsProjects);  // set State

    } catch (err) {
      console.error(err.message);
    }
  };

  const getTickets = async () => {
    try {
  const userPostsTickets = await axios.get('/tickets')
    console.log(userPostsTickets);

      setCurrentTickets(userPostsTickets);  // set State

    } catch (err) {
      console.error(err.message);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get('/projects')
  //     .then(results => setCurrentProjects(results))

  //   axios
  //     .get('/tickets')
  //     .then(results => setCurrentTickets(results))
  // }, [])


  // Ticket Modal
  const [ticketModalShow, setTicketModalShow] = React.useState(false);
  const ticketTitleRef = React.useRef();
  const ticketMembersRef = React.useRef();
  const ticketDescriptionRef = React.useRef();
  const ticketTypeRef = React.useRef();
  const ticketPriorityRef = React.useRef();
  const ticketDurationRef = React.useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addTicket = (e) => {
    e.preventDefault();
    let newTicketText = {
      author: info.name,
      title: ticketTitleRef.current.value,
      type: ticketTypeRef.current.value,
      priority: ticketPriorityRef.current.value,
      members: ticketMembersRef.current.value,
      description: ticketDescriptionRef.current.value,
      duration: ticketDurationRef.current.value,
    }
    axios.post('/tickets', newTicketText);
    setTicketModalShow(false);
  }

  useEffect(() => {
    setLoggedIn(true);
  }, [info])

  useEffect(() => {
    axios.post('/users', create)
  }, [create])

  useEffect(()=>{
    getProjects();
    getTickets();
    const interval=setInterval(()=>{
      getProjects();
      getTickets();
     },1000)

     return()=>clearInterval(interval)
},[])



  // States for registration
  const [name1, setName1] = useState('');
  const [password1, setPassword1] = useState('');

  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');
  const [password2, setPassword2] = useState('');

  // States for signIn
  const [signInError, setSignInError] = useState(true);
  const [signUpError, setSignUpError] = useState(true);

  // State for modal
  const [modalShow1, setModalShow1] = React.useState(false);

  // Memo for Context
  const appProvider = useMemo(() => (
    {
      signInError, setSignInError, name1, setName1, password1, setPassword1, signUpError, setSignUpError,  name2, setName2, password2, setPassword2, email2, setEmail2, info,  setInfo, create, setCreate, currentProjects, currentProject, setCurrentProject, currentTickets, setCurrentTickets, modifyTicket, setModifyTicket, addProject, titleRef, membersRef, descriptionRef, modalShow, setModalShow, addTicket, ticketModalShow, setTicketModalShow, ticketTitleRef, ticketTypeRef, ticketPriorityRef, ticketMembersRef, ticketDescriptionRef, ticketDurationRef
    }
  ), [signInError, setSignInError, name1, setName1, password1, setPassword1, signUpError, setSignUpError,  name2, setName2, password2, setPassword2, email2, setEmail2, info, setInfo, create, setCreate, currentProjects, currentProject, setCurrentProject, currentTickets, setCurrentTickets, modifyTicket, setModifyTicket, addProject, modalShow, setModalShow, addTicket, ticketModalShow, setTicketModalShow, ticketTitleRef, ticketTypeRef, ticketPriorityRef, ticketMembersRef, ticketDescriptionRef, ticketDurationRef]);

  return (
    <div className='Mellow'>
      <AppContext.Provider value={appProvider}>
        <NavigationBar />
        <Container >
          {signInError && loggedIn
          ? (
            <div>

              <SignIn
                setSignInError={setSignInError}
              />
              <>
                <Button variant="danger" onClick={() => setModalShow1(true)}>
                  New Account
                </Button>

                <SignUpModal
                  show={modalShow1}
                  onHide={() => setModalShow1(false)}
                />
              </>
            </div>
          )
          : (
            <div>
              <Dashboard />
            </div>
          )}
        </Container>
        <Container />
        <Container />
      </AppContext.Provider>
    </div>
  )
}
