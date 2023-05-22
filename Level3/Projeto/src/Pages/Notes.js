import React, { useState } from 'react'
import {Jumbotron, Button, Modal, InputGroup, FormControl, Container} from 'react-bootstrap'
import Note from './Note';

function Notes() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [notesList, setNotesList] = useState([]);

  function saveNotes(notes) {
    const note = {
      date: document.getElementById('inputDate').value,
      title: document.getElementById('inputTitle').value,
      description: document.getElementById('inputDescription').value,
    }

    const copy = [...notesList];
    copy.push(note);
    setNotesList(copy);
    setShow(false);

  }

  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class='display-4'>Minhas Anotações</h1>
        <p class="lead">Usa a janela para adicionar anotações!</p>
        <Button variant="dark" onClick={handleShow}>Criar</Button>
      </div>

      <Container fluid>
        {notesList.map(item => <Note title={item.title} date={item.date} description={item.description}/>)}
      </Container>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Nova Anotação</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Data</InputGroup.Text>
            </InputGroup.Prepend>
            <input type="date" id="inputDate"/>
          </InputGroup>

          <br/>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Titulo</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputTitle"/>
          </InputGroup>

          <br/>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Descrição</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputDescription" as="textaera"/>
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>Cancelar</button>
          <button variant="primary" onClick={() => {saveNotes()}}>Adicionar</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Notes