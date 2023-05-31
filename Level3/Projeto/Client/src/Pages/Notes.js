import React, { useState, useEffect } from 'react'
import {Jumbotron, Button, Modal, InputGroup, FormControl, Container} from 'react-bootstrap'
import Note from './Note';
import api from '../Api';
import axios from 'axios';

function Notes() {
  const [note,setNote] = useState({title: '',description: '',data:''})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notesList, setNotesList] = useState([]);

  function GetAll(){
    axios.get('http://localhost:3001/notes')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  
  function saveNotes(){
    axios.post('http://localhost:3001/notes', {note})
      .then(res => console.log('Deu certo'))
      .catch(err => console.log(err))

  }

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className='display-4'>Minhas Anotações</h1>
        <p className="lead">Usa a janela para adicionar anotações!</p>
        <Button variant="dark" onClick={handleShow}>Criar</Button>
        <br/>
      </div>

      <Container fluid>
        {notesList.map(item => <Note title={item.title} date={item.date} description={item.description} id={item.id} getAll={GetAll}/>)}
      </Container>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Nova Anotação</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <InputGroup>
              <InputGroup.Text>Data</InputGroup.Text>
            <input onChange={(e)=>setNote({...note,data: e.target.value})} type="date" id="inputDate"/>
          </InputGroup>

          <br/>

          <InputGroup>
              <InputGroup.Text>Titulo</InputGroup.Text>
            <FormControl onChange={(e)=>setNote({...note,title: e.target.value})} id="inputTitle"/>
          </InputGroup>

          <br/>

          <InputGroup>
              <InputGroup.Text >Descrição</InputGroup.Text>
            <FormControl onChange={(e)=>setNote({...note,description: e.target.value})} id="inputDescription"/>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={() => {saveNotes()}}>Adicionar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Notes