import React from 'react'
import { Button, Card, Badge } from 'react-bootstrap'
import { FormatarData } from '../fn-helpers/formatarData'

function noticiaPost(props) {

  return (
    <> 
        <Card>
            <Card.Body>
                <h2><Badge variant="secondary">{props.categoria}</Badge></h2>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{FormatarData(props.date)}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Card.Img scr={props.image} className='blogImage'/>
                <br/>
                <br/>
                <a href={props.url}>Clique aqui para abrir a noticia completa!</a>
                <Button variant="danger" onClick={() => { props.deleteNote(props.id)} }>Excluir</Button>
            </Card.Body>
        </Card>
        <br/>
    </>
  )
}

export default blogPost