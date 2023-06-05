import React, { useState } from 'react'
import "../Styles/Root.css"

function Root() {

    const [login, setLogin] = useState(1);

    // if(login == 1){
    //     return {Error: "Faça o Login para poder acessar"};        
    // }

    return (
        <>
            <div class='ladding-page'>
                <div className='login'>
                    <h1>Pagina Inicial</h1>
                    <h3>Faça o Login para poder acessar suas paginas</h3>
                    <button className='login'>Login</button>                    
                </div>
                <br/>
                <div className='sobre'>
                    <h1>Sobre</h1>
                </div>
                <br/>
                <div className='anotacoes'>
                    <h1>Anotações</h1>
                </div>
                <br/>
                <div className='blog'>
                    <h1>Blog</h1>
                </div>
            </div>
        </>
    )
}

export default Root