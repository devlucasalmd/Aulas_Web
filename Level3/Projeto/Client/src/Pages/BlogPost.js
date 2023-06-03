import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FormatarData } from '../fn-helpers/formatarData'

function blogPost(props) {

  return (
    <> 
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{FormatarData(props.date)}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Card.Img scr={props.image} className='blogImage'/>
                <Button variant="danger" onClick={() => { props.deleteNote(props.id)} }>Excluir</Button>
            </Card.Body>
        </Card>
        <br/>
    </>
  )
}

export default blogPost