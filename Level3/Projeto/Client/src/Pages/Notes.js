import React, { useState, useEffect } from 'react'
import {Jumbotron, Button, Modal, InputGroup, FormControl, Container} from 'react-bootstrap'
import Note from './Note';
import axios from 'axios';

function Notes() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [note,setNote] = useState({date: '',title: '',description:''})
  const [show, setShow] = useState(false);
  const [notesList, setNotesList] = useState([]);

  function GetAll(){
    axios.get('http://localhost:3001/notes')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    GetAll()
  }, []);
  
  function saveNotes(){
    let {date, title, description} = note;
    axios.post('http://localhost:3001/notes', {date, title, description})
      .then(res => {
        console.log('Deu certo')
        setNotesList([...notesList, res.data]);
        setShow(false); 
      })
      .catch(err => console.log(err))

  }
  
  function deleteNote(id){
    axios.delete(`http://localhost:3001/notes/${id}`)
      .then(res=>{
        console.log(res.data)
        setNotesList(notesList.filter( n => n.id !== id ))
      })
      .catch(erro=>console.log(erro))
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
        {notesList.map(item => 
          <Note 
            title={item.title} 
            date={item.date} 
            description={item.description} 
            id={item.id} 
            key={item.key}
            deleteNote={deleteNote}
          />)}
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