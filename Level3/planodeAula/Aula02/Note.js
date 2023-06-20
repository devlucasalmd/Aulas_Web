import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FormatarData } from '../fn-helpers/formatarData'

function Note(props) {

  return (
    <> 
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{FormatarData(props.date)}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="danger" onClick={() => { props.deleteNote(props.id)} }>Excluir</Button>
                <Button variant="warning" onClick={() => { props.updateNote(props.id)} }>Editar</Button>
            </Card.Body>
        </Card>
        <br/>
    </>
  )
}

export default Note;