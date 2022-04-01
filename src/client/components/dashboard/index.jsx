import React, { useContext } from 'react';
import ProjectList from './ProjectList';
import NewProjectModal from './NewProjectModal';
import ProjectInfo from './ProjectInfo';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../Context';
import Search from '../navbar/Search';

export default function Dashboard() {

  const { modalShow, setModalShow } = useContext(AppContext);

  return (
    <div>
      <div>
        <ProjectInfo />
      </div>
      <div className="projects" >
          <>
          <Button className="button12" variant="danger" onClick={() => setModalShow(true)}>New Project</Button>

          <NewProjectModal
            show={modalShow}
            setModalShow={setModalShow}
            onHide={() => setModalShow(false)}
          />
        </>
        <ProjectList />
        {/* <Search /> */}
      </div>
    </div>
  )
}
