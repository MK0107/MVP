import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../../Context';
import { Table } from 'react-bootstrap';

export default function ProjectList() {
  const { currentProjects, setCurrentProject, setCurrentProjects } = useContext(AppContext);
  let projects = currentProjects.data;

  if (!Array.isArray(projects)) {
    return null;
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Project</th>
          <th>Author</th>
          <th>Members</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <tr onClick={()=> setCurrentProject({
            title: project.title,
            author: project.author,
            members: project.members,
            description: project.description,
            time: project.time
          })}>
            <td key={Math.random()} >
              {project.id}
            </td>
            <td key={Math.random()} >
              {project.title}
            </td>
            <td key={Math.random()} >
              {project.author}
            </td>
            <td key={Math.random()} >
              {project.members}
            </td>
            <td key={Math.random()} >
              {project.description}
            </td>
            <td key={Math.random()} >
              {project.time.slice(5,10).split('-').join('/')}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
