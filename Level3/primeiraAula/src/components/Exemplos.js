import React from 'react'

function Exemplos() {
    const name = "Lucas" // Normalmente vem de algum lugar (Banco de Dados)
    const newName = name.toUpperCase()

    const url = 'https://via.placeholder.com/150'
  
    return (
        <>
            <br/>
            <p>Olá Mundo</p> // Precisa estar dentro de um Fragmento
            <p>Olá {name}</p>
            <p>Olá {newName}</p>
            <img src={url} alt="Imagem"/> //url dinamica
        </>
  )
}

export default Exemplos
