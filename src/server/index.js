// Imports
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { addUser, getUsers, getUser, getProjects, getProject, getTickets, getTicket, addProject, addTicket, modifyTicket } = require('./controllers');

// Express app
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// API Proxy
app.get('/users', getUsers);
app.get('/users/:user_id', getUser);

app.get('/projects', getProjects);
app.get('/projects:project_id', getProject);

app.get('/tickets', getTickets);
app.get('/tickets:ticket_id', getTicket);

app.post('/users', addUser);
app.post('/projects', addProject);
app.post('/tickets', addTicket);
app.put('/tickets', modifyTicket);

// Server & Port
app.listen(3000, () => {
  console.log('Express server is listening on 3000');
});