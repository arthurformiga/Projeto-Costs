import React, { useEffect, useState } from 'react';
import Message from '../layout/Message/Message';
import Loading from '../layout/Loading/Loading';
import { useLocation } from 'react-router-dom';
import Container from '../layout/Container/Container'
import LinkButton from '../layout/LinkButton/LinkButton'
import ProjectCard from '../../project/ProjectCard';

import styles from './Projects.module.css'

export default function Project() {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ""

    if(location.state) {
      message = location.state.message
    }

    useEffect(() => {
      fetch('http://localhost:5000/projects',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => {
          setProjects(data)
          setRemoveLoading(true)
      })
      .catch((error) => console.log(error))
    },[])

    function removeProjects(id){
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json'
        },
        
      }).then((response) => response.json())
      .then((data) =>  {
        setProjects(projects.filter((project) => project.id !== id))
        //message
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch((error) => console.log(error))
    }

 return (
   <div className={styles.project_container}>
    <div className={styles.title_container}>
      <h1>Meus Projetos</h1>
      <LinkButton to='/newproject' text="Criar Projeto"/>
    </div>
     {message &&  <Message msg={message} type="sucess"/>}
     {projectMessage &&  <Message msg={message} type="sucess"/>}
     <Container customClass = "start">
        {projects.length > 0  &&
        projects.map((project) => 
          <ProjectCard key={project.id} id={project.id} 
          name={project.name} budget={project.budget}
          category={project.category.name} handleRemove={removeProjects} />
        )}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 &&(
          <p>Não há projetos cadastrados!</p>
        )}
     </Container>
   </div>
 );
}