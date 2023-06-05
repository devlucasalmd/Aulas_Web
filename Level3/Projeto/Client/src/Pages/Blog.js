import React, { useState, useEffect } from 'react'
import {Modal, Container} from 'react-bootstrap'
import axios from 'axios';
import blogPost from './BlogPost';
import "../Styles/Botoes.css";
import "../Styles/Blog.css";

function Blog() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [blog,setBlog] = useState({date: '',title: '',description:'', image: ''})
  const [show, setShow] = useState(false);
  const [blogList, setBlogList] = useState([]);

  function GetAll(){
    axios.get('http://localhost:3001/blog')
      .then(res => {
        setBlogList(res.data);
      })
      
      .catch(err => console.error(err))
  }

  useEffect(() => {
    GetAll()
  },[]);
  
  function saveBlog(){
    let {date,title,description,image} = blog;
    axios.post('http://localhost:3001/blog', {date,title,description,image})
      .then(res => {
        console.log('Deu certo',res.data)
        setBlogList([...blogList, res.data.note]);
        setShow(false); 
      })
      .catch(err => console.log(err))

  }
  
  function deleteBlog(id){
    axios.delete(`http://localhost:3001/blog/${id}`)
      .then(res=>{
        console.log(res.data)
        setBlogList(blogList.filter( n => n.id !== id ))
      })
      .catch(erro=>console.log(erro))
  }

  // function OrderNewest(){
  //   var copy = [...blogList];

  //   do{
  //     var change = false;
  //     var i = 0;
  //     for(i=0; i<blogList.length-1; i++)
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

  //   setBlogList(copy);
  // }

  // function OrderOldest()
  //   {
  //       var copy = [...blogList];

  //       do{
  //         var change = false;
  //         var i = 0;
  //         for(i=0; i<blogList.length-1; i++)
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

  //       setBlogList(copy);
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
        <h1 className='display-4'>Meu Blog</h1>
        <p className="lead">Acompanhe aqui atualizações sobre o dia a dia</p>
        <button className='postagem' onClick={handleShow}>Criar Nova Postagem</button>
        <br/>
        <br/>
        <br/>
        <button className='recente' onClick={()=> {}}>Mais Recentes</button>
        <button className='antigo' onClick={()=> {}}>Mais Antigos</button>
        <br/>
      </div>

      <Container fluid>
        {blogList.map(item => 
          <blogPost 
            title={item.title} 
            date={item.date} 
            description={item.description}
            image = {item.image}
            id={item.id} 
            key={item.id}
            deleteNote={deleteBlog}
          />)}
      </Container>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Nova Anotação</Modal.Title>
        </Modal.Header>

        <Modal.Body className='card'>          
          <label>Data:</label>
          <input onChange={(e)=>setBlog({...blog,date: e.target.value})} type="date" id="inputDate"/>
          
          <br/>      
          
          <label>Titulo:</label>
          <input onChange={(e)=>setBlog({...blog,title: e.target.value})} id="inputTitle"/>        
          
          <br/>
                    
          <label>Descrição:</label>
          <input onChange={(e)=>setBlog({...blog,description: e.target.value})} id="inputDescription"/>
                    
          <br/>
          
          <label>Imagem:</label>
          <input onChange={(e)=>setBlog({...blog,description: e.target.value})} id="inputImage"/>
      
        </Modal.Body>

        <Modal.Footer>
          <button className='cancelar' onClick={handleClose}>Cancelar</button>
          <button className='adicionar' onClick={() => {saveBlog()}}>Adicionar</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Blog