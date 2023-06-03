import React, { useState, useEffect } from 'react'
import {Jumbotron, Button, Modal, InputGroup, FormControl, Container} from 'react-bootstrap'
import axios from 'axios';
import blogPost from './BlogPost';

function Blog() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [note,setNote] = useState({date: '',title: '',description:'', image: ''})
  const [show, setShow] = useState(false);
  const [notesList, setNotesList] = useState([]);

  function GetAll(){
    axios.get('http://localhost:3001/blog')
      .then(res => {
        setNotesList(res.data);
      })
      
      .catch(err => console.error(err))
  }

  useEffect(() => {
    GetAll()
  },[]);
  
  function saveNotes(){
    let {date,title,description,image} = note;
    axios.post('http://localhost:3001/blog', {date,title,description,image})
      .then(res => {
        console.log('Deu certo',res.data)
        setNotesList([...notesList, res.data.note]);
        setShow(false); 
      })
      .catch(err => console.log(err))

  }
  
  function deleteNote(id){
    axios.delete(`http://localhost:3001/blog/${id}`)
      .then(res=>{
        console.log(res.data)
        setNotesList(notesList.filter( n => n.id !== id ))
      })
      .catch(erro=>console.log(erro))
  }

  function OrderNewest(){
    var copy = [...notesList];

    do{
      var change = false;
      var i = 0;
      for(i=0; i<notesList.length-1; i++)
      {
        if(Date.parse(copy[i]).date < Date.parse(copy[i+1].date))
        {
          var aux = copy[i];
          copy[i] = copy[i+1];
          copy[i+1] = aux;
          change = true;
        }
      }
    }while (change == true);

    setNotesList(copy);
  }

  function OrderOldest()
    {
        var copy = [...notesList];

        do{
          var change = false;
          var i = 0;
          for(i=0; i<notesList.length-1; i++)
          {
            if(Date.parse(copy[i]).date < Date.parse(copy[i+1].date))
            {
              var aux = copy[i];
              copy[i] = copy[i+1];
              copy[i+1] = aux;
              change = true;
            }
          }
        }while (change == true);

        setNotesList(copy);
    }
    
  //   setNotesList(notesList.filter(element => { 
  //     if(element.date > ordem.date){
  //       setNotesList = ordem.date;
  //     }
  //     console.log(notesList);
  //   }))


  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className='display-4'>Meu Blog</h1>
        <p className="lead">Acompanhe aqui atualizações sobre o dia a dia</p>
        <Button variant="dark" onClick={handleShow}>Criar Nova Postagem</Button>
        <br/>
        <br/>
        <br/>
        <Button variant="info" onClick={()=> {OrderNewest();}}>Mais Recentes</Button>
        <Button variant="secondary" onClick={()=> {OrderOldest();}}>Mais Antigos</Button>
        <br/>
      </div>

      <Container fluid>
        {notesList.map(item => 
          <Blog 
            title={item.title} 
            date={item.date} 
            description={item.description}
            image = {item.image}
            id={item.id} 
            key={item.id}
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
            <input onChange={(e)=>setNote({...note,date: e.target.value})} type="date" id="inputDate"/>
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
          
          <br/>

          <InputGroup>
              <InputGroup.Text >Imagem</InputGroup.Text>
            <FormControl onChange={(e)=>setNote({...note,description: e.target.value})} id="inputImage"/>
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
export default Blog