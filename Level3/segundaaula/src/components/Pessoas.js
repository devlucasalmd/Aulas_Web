import React from 'react'

function Pessoas(props) {
  return (
    <div>
        <p>Nome: {props.nome}</p>
        <p>Idade:  {props.idade}</p>
        <p>Profissão:  {props.profissao}</p>
    </div>
  )
}

export default Pessoas
