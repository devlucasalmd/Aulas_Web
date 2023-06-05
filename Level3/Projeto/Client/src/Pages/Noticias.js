import React, { useState, useEffect } from 'react'
import {Modal, Container} from 'react-bootstrap'
import axios from 'axios';

function Noticia() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [note,setNote] = useState({date: '',title: '',description:'',image: '',url: '',categoria: ''})
  const [show, setShow] = useState(false);
  const [notesList, setNotesList] = useState([]);

  function GetAll(){
    axios.get('http://localhost:3001/noticias')
      .then(res => {
        setNotesList(res.data);
      })
      
      .catch(err => console.error(err))
  }

  useEffect(() => {
    GetAll()
  },[]);
  
  function saveNotes(){
    let {date,title,description,image,url,categoria} = note;
    axios.post('http://localhost:3001/noticias', {date,title,description,image,url,categoria})
      .then(res => {
        console.log('Deu certo',res.data)
        setNotesList([...notesList, res.data.note]);
        setShow(false); 
      })
      .catch(err => console.log(err))

  }
  
  function deleteNote(id){
    axios.delete(`http://localhost:3001/noticias/${id}`)
      .then(res=>{
        console.log(res.data)
        setNotesList(notesList.filter( n => n.id !== id ))
      })
      .catch(erro=>console.log(erro))
  }

  // function OrderNewest(){
  //   var copy = [...notesList];

  //   do{
  //     var change = false;
  //     var i = 0;
  //     for(i=0; i<notesList.length-1; i++)
  //     {
  //       if(Date.parse(copy[i]).date < Date.parse(copy[i+1].date))
  //       {
  //         var aux = copy[i];
  //         copy[i] = copy[i+1];
  //         copy[i+1] = aux;
  //         change = true;
  //       }
  //     }
  //   }while (change === true);

  //   setNotesList(copy);
  // }

  // function OrderOldest()
  //   {
  //       var copy = [...notesList];

  //       do{
  //         var change = false;
  //         var i = 0;
  //         for(i=0; i<notesList.length-1; i++)
  //         {
  //           if(Date.parse(copy[i]).date < Date.parse(copy[i+1].date))
  //           {
  //             var aux = copy[i];
  //             copy[i] = copy[i+1];
  //             copy[i+1] = aux;
  //             change = true;
  //           }
  //         }
  //       }while (change === true);

  //       setNotesList(copy);
  //   }
    
  //   setNotesList(notesList.filter(element => { 
  //     if(element.date > ordem.date){
  //       setNotesList = ordem.date;
  //     }
  //     console.log(notesList);
  //   }))


  return (
    <div className="container">
      <div className="painel">
        <h1 className='display-4'>Minhas Noticias</h1>
        <p className="lead">Acompanhe aqui minhas noticias mais interessantes do dia a dia</p>
        <button className='postagem' onClick={handleShow}>Criar Nova Postagem</button>
        <br/>
        <br/>
        <br/>
        <button className='recente'>Mais Recentes</button>
        {/* onClick={()=> {OrderNewest();}} */}
        <button className='antigo'>Mais Antigos</button>
        {/* onClick={()=> {OrderOldest();}} */}
        <br/>
      </div>

      <Container fluid>
        {notesList.map(item => 
          <noticiaPost
            title={item.title} 
            date={item.date} 
            description={item.description}
            image = {item.image}
            url = {item.url}
            categoria={item.categoria}
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
          
          <label>Descrição:</label>
          <input onChange={(e)=>setNote({...note,description: e.target.value})} id="inputDescription"/>
          
          
          <br/>
          
          <label>Imagem:</label>
          <input onChange={(e)=>setNote({...note,description: e.target.value})} id="inputImage"/>          

          <br/>

          <label>Fonte:</label>
          <input onChange={(e)=>setNote({...note,description: e.target.value})} id="inputFonte"/>          

          <br/>

          <label>Categoria:</label>
          <select onChange={(e)=>setNote({...note,description: e.target.value})} id="inputCategory">
            <option>Filmes</option>
            <option>Series</option> 
            <option>Animes</option> 
            <option>Games</option> 
            <option>Esportes</option> 
            <option>Musicas</option>               
          </select>
                                  
        </Modal.Body>

        <Modal.Footer>
          <button className='cancelar' onClick={handleClose}>Cancelar</button>
          <button className='adicionar' onClick={() => {saveNotes()}}>Adicionar</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Noticia