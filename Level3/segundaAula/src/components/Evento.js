import React from 'react'

function Evento({nome}) {
    
    function meuEvento(){
        alert("Evento ativado!");
    }
    
    function SayName(){
        console.log(`seu nome é: ${nome}`);
    }
  
    return (
    <div>
        <p>Clique em mim para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar</button>
        <button onClick={SayName}>Nome</button>
    </div>
  )
}

export default Evento