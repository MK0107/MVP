\c postgres;

DROP DATABASE IF EXISTS mellow;

CREATE DATABASE mellow;

\c mellow;

CREATE TABLE users (
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE projects (
  id SERIAL,
  userId INT,
  author VARCHAR(255),
  title VARCHAR(255),
  members VARCHAR(1000),
  description VARCHAR(1000),
  time timestamp default current_timestamp,
  PRIMARY KEY (id),
  FOREIGN KEY (userId)
    REFERENCES users (id)
  -- FOREIGN KEY (author)
  --   REFERENCES users (name)
);

CREATE TABLE tickets (
  id SERIAL,
  projectId INT,
  author VARCHAR(255),
  title VARCHAR(255),
  type VARCHAR(255),
  priority VARCHAR(255),
  members VARCHAR(1000),
  description VARCHAR(1000),
  duration VARCHAR(255),
  time timestamp default current_timestamp,
  PRIMARY KEY (id),
  FOREIGN KEY (projectId)
    REFERENCES projects (id)
  -- FOREIGN KEY (author)
  --   REFERENCES projects (author)
);

CREATE INDEX idx_projects_id ON projects (userId);
CREATE INDEX idx_tickets_id ON tickets (projectId);