import React, { useState, useEffect } from 'react'
import {Modal, Container} from 'react-bootstrap'
import Note from './Note';
import axios from 'axios';
import "../Styles/Botoes.css"

function Notes() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [note,setNote] = useState({date: '',title: '',description:''})
  const [show, setShow] = useState(false);
  const [notesList, setNotesList] = useState([]);

  function GetAll(){
    axios.get('http://localhost:3001/notes')
      .then(res => {
        setNotesList(res.data);
      })
      
      .catch(err => console.error(err))
  }

  useEffect(() => {
    GetAll()
  },[]);
  
  function saveNotes(){
    let {date,title,description} = note;
    axios.post('http://localhost:3001/notes', {date,title,description})
      .then(res => {
        console.log('Deu certo',res.data)
        setNotesList([...notesList, res.data.note]);
        setShow(false); 
      })
      .catch(err => console.log(err))

  }

  function updateNote(id){

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
    <div className="container">
      <div className="painel">
        <h1 className='display-4'>Minhas Anotações</h1>
        <p className="lead">Usa a janela para adicionar anotações!</p>
        <button className="postagem" onClick={handleShow}>Criar Nova Anotação</button>
        <br/>
        <br/>
        <br/>
        <button className='recente' onClick={()=> {}}>Mais Recentes</button>
        <button className='antigo' onClick={()=> {}}>Mais Antigos</button>
        <br/>
      </div>

      <Container fluid>
        {notesList.map(item => 
          <Note 
            title={item.title} 
            date={item.date} 
            description={item.description} 
            id={item.id} 
            key={item.id}
            deleteNote={deleteNote}
          />)}
      </Container>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Nova Anotação</Modal.Title>
        </Modal.Header>

        <Modal.Body className='card'>

          <label>Data:</label>
          <input onChange={(e)=>setNote({...note,date: e.target.value})} type="date" id="inputDate"/>        

          <br/>

          <label>Titulo:</label>
          <input onChange={(e)=>setNote({...note,title: e.target.value})} id="inputTitle"/>          

          <br/>
          
          <label>Descrição</label>

          <input FormControl onChange={(e)=>setNote({...note,description: e.target.value})} id="inputDescription"/>          
        </Modal.Body>

        <Modal.Footer>
          <button className='cancelar' onClick={handleClose}>Cancelar</button>
          <button className='adicionar' onClick={() => {saveNotes()}}>Adicionar</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Notes