const database = require('../database');

const Queries = {

  addUser: (req, res) => {
    if (req.body.name === '') {
      return;
    }
    let params = [req.body.name, req.body.email, req.body.password]
    let sql = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;
    database
      .query(sql, params)
      .catch(err => console.log(err.stack))
      .then(results => res.json(results))
  },

  getUsers: (req, res) => {
    database
      // ORDER BY (id) LIMIT ${limit} OFFSET ${page}
      .query(`SELECT * FROM users`)
      .catch(err => console.log(err.stack))
      .then(results => res.json(results.rows))
  },

  getUser: (req, res) => {

  },


  addProject: (req, res) => {
    let params = [req.body.author, req.body.title, req.body.members, req.body.description]
    let sql = `INSERT INTO projects (author, title, members, description) VALUES ($1, $2, $3, $4);`;
    database
      .query(sql, params)
      .catch(err => console.log(err.stack))
      .then(results => res.json(results))
  },

  getProjects: (req, res) => {
    let page = req.query.page || 0;
    let limit = req.query.limit || 5;
    database
    .query(`SELECT * FROM projects ORDER BY (id) LIMIT ${limit} OFFSET ${page}`)
    .catch(err => console.log(err.stack))
    .then(results => res.json(results.rows))
  },

  getProject: (req, res) => {

  },


  addTicket: (req, res) => {
    let params = [req.body.author, req.body.title, req.body.type, req.body.priority, req.body.members, req.body.description, req.body.duration];
    let sql = `INSERT INTO tickets (author, title, type, priority, members, description, duration) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    database
      .query(sql, params)
      .catch(err => console.log(err.stack))
      .then(results => res.json(results))
  },

  modifyTicket: (req, res) => {
    let params = [req.body.author, req.body.title, req.body.type, req.body.priority, req.body.members, req.body.description, req.body.duration, req.body.id];
    console.log(params);
    let sql = `UPDATE tickets SET (author, title, type, priority, members, description, duration) = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8;`;
    database
    .query(sql, params)
    .catch(err => console.log(err.stack))
    .then(results => res.json(results))
  },

  getTickets: (req, res) => {
    let page = req.query.page || 0;
    let limit = req.query.limit || 5;
    database
    .query(`SELECT * FROM tickets ORDER BY (id) LIMIT ${limit} OFFSET ${page}`)
    .catch(err => console.log(err.stack))
    .then(results => res.json(results.rows))
  },

  getAllTickets: (req, res) => {
    database
    .query(`SELECT * FROM tickets ORDER BY (id)`)
    .catch(err => console.log(err.stack))
    .then(results => res.json(results.rows))
  },

  getTicket: (req, res) => {

  }

}

module.exports = Queries;